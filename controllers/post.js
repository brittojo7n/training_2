const User = require('../models/user');
const Post = require('../models/post');
const { Op } = require('sequelize');

exports.createPost = async (req, res) => {
  try {
    const { title, content, username } = req.body;
    if (!title || !content || !username) {
      return res.status(400).send({ message: 'Title, content, and username are required.' });
    }

    const user = await User.findOne({ where: { username: username } });

    if (!user) {
      return res.status(404).send({ message: `User '${username}' not found.` });
    }

    const newPost = await Post.create({ title, content, userId: user.id });
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send({ message: 'Failed to create post.' });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['username']
      }
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send({ message: 'Failed to fetch posts.' });
  }
};

exports.getPostsByUser = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({
            where: { username: username },
            include: Post 
        });

        if (user) {
            res.status(200).json(user.Posts);
        } else {
            res.status(404).send({ message: `User '${username}' not found.` });
        }
    } catch (error) {
        console.error('Error fetching user posts:', error);
        res.status(500).send({ message: 'Failed to fetch user posts.' });
    }
};

exports.searchPosts = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send({ message: 'A search query parameter is required.' });
    }

    const posts = await Post.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${query}%` } },
          { content: { [Op.iLike]: `%${query}%` } }
        ]
      },
      include: {
        model: User,
        attributes: ['username']
      }
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error searching posts:', error);
    res.status(500).send({ message: 'Failed to search posts.' });
  }
};
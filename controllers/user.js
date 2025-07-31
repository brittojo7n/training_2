const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        if (!username || !email) {
            return res.status(400).send({ message: 'Username and email are required' });
        }
        const newUser = await User.create({ username, email });
        res.status(201).json(newUser);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ message: 'User with that username or email already exists.' });
        }
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Error creating user' });
    }
};

exports.truncateUsers = async (req, res) => {
    try {
        await User.destroy({
            truncate: true
        });
        res.status(200).send({ message: 'User table has been truncated successfully.' });
    } catch (error) {
        console.error('Error truncating user table:', error);
        res.status(500).send({ message: 'Failed to truncate user table.' });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ message: 'Failed to fetch users.' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { username } = req.params;
        const { email } = req.body;

        if (!email) {
            return res.status(400).send({ message: 'Email is required in the request body.' });
        }

        const [updatedRows] = await User.update({ email }, {
            where: { username: username }
        });

        if (updatedRows > 0) {
            res.status(200).send({ message: `User '${username}' was updated successfully.` });
        } else {
            res.status(404).send({ message: `User '${username}' not found.` });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send({ message: 'Failed to update user.' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { username } = req.params;

        const deletedRows = await User.destroy({
            where: { username: username }
        });

        if (deletedRows > 0) {
            res.status(200).send({ message: `User '${username}' was deleted successfully.` });
        } else {
            res.status(404).send({ message: `User '${username}' not found.` });
        }
    } catch (error)
        {
        console.error('Error deleting user:', error);
        res.status(500).send({ message: 'Failed to delete user.' });
    }
};

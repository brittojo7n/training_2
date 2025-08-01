require('dotenv').config();
const express = require('express');
const sequelize = require('./db/connection');

const User = require('./models/user');
const Post = require('./models/post');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const startServer = async () => {
  try {
    User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
    Post.belongsTo(User, { foreignKey: 'userId' });
    
    await sequelize.authenticate();
    console.log('Database connection established');

    await sequelize.sync({ alter: true });
    console.log('Models synchronized');

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Server startup error:', error);
    process.exit(1);
  }
};

startServer();
require('dotenv').config();
const express = require('express');
const sequelize = require('./db/connection');
const userRoutes = require('./routes/user');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/user', userRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');

    app.listen(port, () => {
      console.log(`Server listening at http://127.0.0.1:${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database or sync models:', error);
    process.exit(1);
  }
};

startServer();

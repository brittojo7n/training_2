require('dotenv').config();
const express = require('express');
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const sequelize = require('./db/connection');
const User = require('./models/user');

const app = express();
const port = 3000;
const content = [];
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_USER = process.env.EMAIL_USER;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(
  bodyParser.json({
    limit: "500mb",
  })
);

app.use('/web', (req, res, next) => {
    console.log(`Received`);
    next();
}).get('/web', (req, res, next) => {
    res.send(content);
    res.end();
    next();
}).post('/web', (req, res, next) => {
    content.push('post');
    res.send(`content is (${content.length})`)
    res.end();
    next();
}).patch('/web', (req, res, next) => {
    if (content.length > 0) {
        let patched = false;
        for (let i = 0; i < content.length; i++) {
            if (content[i] === 'put') {
                content[i] = 'patch';
                patched = true;
            }
        }
        if (patched) {
            res.send(`Content patched. New content: [${content}]`);
        } else {
            res.send(`Nothing Patched because 'put' wasn't found in content: [${content}]`);
        }
    } else {
        console.log(`Nothing Patched!`)
        res.send(`Nothing patched because content is empty (${content.length})`)
    }
    res.end();
    next();
}).put('/web', (req, res) => {
    content.push('put');
    res.send(`content is (${content.length})`)
    res.end();
});

app.get('/account/:user/:pass', (req, res) => {
    console.log(req.params);
    res.send(req.params);
    res.end();
});

app.get('/account', (req, res) => {
    console.log(req.query);
    res.send(req.query);
    res.end();
})

app.get(/\/ab?cd/, (req, res) => {
    console.log(`Navigated to: ${req.path}`)
    res.send(`This is ${req.path}`);
    res.end();
});

app.get(/\/home\/user\/ab?cd/, (req, res) => {
    console.log(`Navigated to: ${req.path}`)
    res.send(`This is ${req.path}`);
    res.end();
});

app.post("/mail", async (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    },
  });

  const mailOptions = {
    from: `"RUST" <${EMAIL_USER}>`,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent!");
  } catch (err) {
    res.status(500).send("Failed to send!");
  }
});

app.post('/user', async (req, res) => {
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
});

app.delete('/user', async (req, res) => {
    try {
        await User.destroy({
            truncate: true
        });
        res.status(200).send({ message: 'User table has been truncated successfully.' });
    } catch (error) {
        console.error('Error truncating user table:', error);
        res.status(500).send({ message: 'Failed to truncate user table.' });
    }
});

app.get('/user', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ message: 'Failed to fetch users.' });
    }
});

// Route to update a user's email by username
app.put('/user/:username', async (req, res) => {
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
});

app.delete('/user/:username', async (req, res) => {
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
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ message: 'Failed to delete user.' });
    }
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database or sync models:', error);
    process.exit(1);
  }
};

startServer();

require('dotenv').config();
const express = require('express');
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
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
        for (i=0;i<content.length;i++){
            if (content[i]=='put'){
                content[i]='patch';
            }
            else {
                res.send(`Nothing Patched because \'put\' wasn't found in content: [${content}]`);
            };
        };
    }
    else {
        console.log(`Nothing Patched!`)
        res.send(`Nothing patched because content is empty (${content.length})`)
    };
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
    from: `"RUST" <${process.env.GMAIL_USER}>`,
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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
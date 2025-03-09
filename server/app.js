const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Message = require('./Message');

// Initialize Express app
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contact_form', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Handle POST request from contact form
app.post('/submit-message', (req, res) => {
  const { name, email, message } = req.body;

  const newMessage = new Message({
    name: name,
    email: email,
    message: message
  });

  newMessage.save()
    .then(() => {
      res.send('Message sent successfully!');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error saving message');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

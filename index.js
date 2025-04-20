// index.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON in POST requests

// --- TEST ROUTE ---
app.get('/ping', (req, res) => {
  res.send('pong');
});

// --- CONTACT FORM ROUTE ---
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log('Contact form submission:', { name, email, message });

  // For now, just respond with a success message
  res.status(200).json({ success: true, message: 'Form received!' });
});

// --- START SERVER ---
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

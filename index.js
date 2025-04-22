const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Contact endpoint
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log('Contact form submitted:', { name, email, message });

  // In a real app, you'd store this info or send an email
  res.status(200).json({ message: 'Message received successfully!' });
});

// Test endpoint
app.get('/', (req, res) => {
  res.send('Contact backend is running.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Contact form submitted:', { name, email, message });

  // For now, just send a success response
  res.status(200).json({ success: true, message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

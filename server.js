const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can change the port if needed

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.) from the 'public' folder
app.use(express.static('public'));

// Array to store form submissions (replace this with a database in a real app)
const submissions = [];

// POST endpoint to handle form submissions
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('Please fill in all fields.');
  }

  const submission = { name, email, message };
  submissions.push(submission);

  // Log the submission (replace this with actual database storage)
  console.log('New Submission:', submission);

  res.status(200).send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = 5000;

// Define a route that returns "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for the /healthz endpoint
app.get('/healthz', (req, res) => {
  // Respond with a simple JSON object indicating that the application is healthy
  res.json({ status: 'ok' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

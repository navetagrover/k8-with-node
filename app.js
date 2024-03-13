const express = require('express');
const app = express();
const port = 5000;
const WEATHER_SERVICE_URL = 'http://weather-api-service:4000/weather'; // Using service name as the hostname


// Define a route that returns "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route that returns weather information
app.get('/weather-info', async (req, res) => {
  try {
    // Make a GET request to the weather service
    const response = await axios.get(WEATHER_SERVICE_URL);
    const weatherData = response.data;

    // Extract relevant weather information
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    // Construct the response
    const message = `The weather is ${description} with a temperature of ${temperature}°C`;

    // Send the response
    res.send(message);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Error fetching weather data');
  }
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

const express = require('express');
const app = express();
const port = 3000; // Choose an available port number

app.use(express.json());

// Define the route for receiving the POST request
app.post('/ScreeningHistory', (req, res) => {
  // Process the data received in the request body
  const data = req.body.the_data;
  // Perform desired actions with the data (e.g., save to a database, write to a file)

  // Send a response back to the client
  res.send('Data received and processed successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
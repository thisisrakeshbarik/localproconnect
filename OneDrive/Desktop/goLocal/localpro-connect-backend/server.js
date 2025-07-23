// Import the Express.js framework
const express = require('express');
// Import the CORS middleware to handle cross-origin requests
const cors = require('cors');

// Create an instance of the Express application
const app = express();
// Define the port number for the server to listen on
const PORT = process.env.PORT || 5000; // Use environment variable PORT or default to 5000

// Middleware:
// 1. Enable CORS for all origins. This is crucial for the frontend (running on a different port)
//    to make requests to this backend server. In a production environment, you would restrict
//    this to your specific frontend domain.
app.use(cors());
// 2. Enable Express to parse JSON formatted request bodies.
//    This allows you to receive JSON data from the frontend (e.g., when a user submits a form).
app.use(express.json());

// Basic Route: Home endpoint
// This route handles GET requests to the root URL ('/').
// It sends a simple JSON response indicating the API is running.
app.get('/', (req, res) => {
  res.json({ message: 'LocalPro Connect Backend API is running!' });
});

// Example API Route: Services
// This route handles GET requests to '/api/services'.
// In a real application, this would fetch services from a database.
// For now, it returns a static list of services.
app.get('/api/services', (req, res) => {
  const services = [
    { id: 1, name: 'Plumbing', description: 'Fix leaks, unclog drains, install fixtures.' },
    { id: 2, name: 'Electrical', description: 'Wiring, repairs, fixture installation.' },
    { id: 3, name: 'Carpentry', description: 'Furniture repair, custom builds.' },
    { id: 4, name: 'Beauty & Salon', description: 'Haircuts, spa, makeup.' },
    { id: 5, name: 'Cleaning', description: 'Deep cleaning, sofa cleaning.' },
    { id: 6, name: 'Tech Support', description: 'PC repair, software help.' },
    { id: 7, name: 'Vehicle Care', description: 'Car wash, bike service.' },
    { id: 8, name: 'Driver', description: 'On-demand personal driver.' },
  ];
  res.json(services);
});

// Start the server
// The app listens for incoming requests on the specified PORT.
app.listen(PORT, () => {
  console.log(`LocalPro Connect Backend running on port ${PORT}`);
  console.log(`Access it at: http://localhost:${PORT}`);
});

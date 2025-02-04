// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

// Enable CORS for your frontend domain if needed.
// If your frontend and backend are on the same domain in production, this might not be necessary.
app.use(cors());

// Route to proxy Sanity API requests
// Example: GET /api/sanity?query=YOUR_ENCODED_QUERY_HERE
app.get("/api/sanity", async (req, res) => {
  // The query should be sent as a URL query parameter
  const sanityQuery = req.query.query;

  if (!sanityQuery) {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  // Construct the Sanity API URL (adjust version, dataset, etc. as needed)
  const sanityUrl = `https://uiggghbd.apicdn.sanity.io/v2023-05-03/data/query/production?query=${encodeURIComponent(sanityQuery)}&returnQuery=false`;

  try {
    const response = await axios.get(sanityUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching from Sanity:", error.message);
    res.status(500).json({ error: "Error fetching data from Sanity" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});

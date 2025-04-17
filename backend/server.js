import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/api/search', async (req, res) => {
  try {
    const params = {
      api_key: process.env.RAINFOREST_API_KEY,
      type: "search",
      amazon_domain: "amazon.com",
      ...req.query,
    };

    const response = await axios.get('https://api.rainforestapi.com/request', { params });
    res.json(response.data);
  } catch (error) {
    console.error('Rainforest API Error:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
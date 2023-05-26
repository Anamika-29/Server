const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/endpoint', async (req, res) => {
  const { method, fetchURL, data,headerValue1 } = req.body;

  console.log(req.body);

  try {
    let axiosResponse;
    if (method === 'GET') {
      axiosResponse = await axios.get(fetchURL,{headers: {authorization : headerValue1}});
    } else if (method === 'POST') {
      axiosResponse = await axios.post(fetchURL, data,{headers: {authorization : headerValue1}});
    } else if (method === 'PUT') {
      axiosResponse = await axios.put(fetchURL, data,{headers: {authorization : headerValue1}});
    } else if (method === 'DELETE') {
      axiosResponse = await axios.delete(fetchURL,{headers: {authorization : headerValue1}});
    }
    else {
      throw new Error('Invalid method');
    }

    res.status(200).json(axiosResponse.data);
  } catch (error) {
    const statusCode = error.response ? error.response.status : 500;
    const errorMessage = error.response ? error.response.data : error.message;
    res.status(statusCode).json({ error: errorMessage });
  }
});

const PORT = 2410;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

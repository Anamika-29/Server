const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/endpoint', async (req, res) => {
  const { method,
    fetchURL,
    data,
    headerKey1=headerKey1.toLowerCase(),
    headerValue1,
    headerKey2=headerKey2.toLowerCase(),
    headerValue2,
    headerKey3=headerKey3.toLowerCase(),
    headerValue3} = req.body;

  console.log(req.body);

  try {
    let axiosResponse;
    if (method === 'GET') {
      axiosResponse = await axios.get(fetchURL,{headers: {headerKey1: headerValue1,headerKey2:headerValue2,headerKey3:headerValue3}});
    } else if (method === 'POST') {
      axiosResponse = await axios.post(fetchURL, JSON.parse(data),{headers: {headerKey1: headerValue1,headerKey2:headerValue2,headerKey3:headerValue3}});
    } else if (method === 'PUT') {
      axiosResponse = await axios.put(fetchURL, JSON.parse(data),{headers: {headerKey1: headerValue1,headerKey2:headerValue2,headerKey3:headerValue3}});
    } else if (method === 'DELETE') {
      axiosResponse = await axios.delete(fetchURL,{headers: {headerKey1: headerValue1,headerKey2:headerValue2,headerKey3:headerValue3}});
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

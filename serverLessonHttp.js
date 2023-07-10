const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const { products } = require('./product'); 
const { mobiles } = require('./mobiles'); 
const { brands } = require('./brandpics'); 
const { review } = require('./review'); 
const {pincode} = require('./pincode');

const users = [{firstName:"Anil",
  lastName:"Yadav",
  username:"Anil123",
  email:"anil@gmail.com",
  password:"Anil123",
  phone:"1234567890"},
  {firstName:"Rakesh",
  lastName:"Sharma",
  username:"Rakesh123",
  email:"rakesh@gmail.com",
  password:"Rakesh123",
  phone:"2134567890"},
]

var port = process.env.PORT||2410;

// Route to fetch the product data
app.get('/getProducts', (req, res) => {
  res.json(products);
});

app.get('/getMobiles', (req, res) => {
  res.json(mobiles);
});

app.get('/getPics' , (req,res) => {
  res.json(brands);
})

app.get('/getReview' , (req,res) => {
  res.json(review);
})

app.get('/getPincode' , (req,res) => {
  res.json(pincode);
})

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  let findUser = users.find(user=>user.username===username&&user.password===password);

  // Simulating login logic with hardcoded username and password
  if (findUser) {
    

    res.json(findUser); // Sending user data as response
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

app.post('/api/register', (req, res) => {
  const { firstName, lastName, username, email, password, phone } = req.body;
  
  // Perform registration logic and save the user to the database
  // Replace this with your actual registration code
  
  // For the sake of this example, let's assume registration is successful
  const newUser = {
    firstName,
    lastName,
    username,
    email,
    password,
    phone
  };
  users.push(newUser);
  
  console.log('New user registered:', newUser);
  
  res.json(newUser); // Sending user data as response
});

// Start the server
app.listen(2410, () => {
  console.log(`Server is running on port ${port}`);
});

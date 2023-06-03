const cors = require('cors');
const { Client } = require('pg');
const express = require('express');
const app = express();

const client = new Client({
  user: 'postgres',
  password: 'Emppass@29Emp',
  database: 'postgres',
  port: 5432,
  host: 'db.yeutvsvnghlmhpsfqzlv.supabase.co',
  ssl: { rejectUnauthorized: false },
});
client.connect(function (err) {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err.stack);
  } else {
    console.log('Connected to PostgreSQL!');
  }
});

let connData = {
  host:"localhost",
  user:"root",
  password:"",
  database:"myData",
}



app.use(cors());

app.use(express.json());
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header(
"Access-Control-Allow-Headers",
"GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
);
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept"
);
next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));


app.get('/products', function (req, res) {
  let sql = 'SELECT * FROM MyStore';
  client.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.status(404).send('Error in fetching data');
    } else res.send(result.rows);
  });
});

app.get('/products/:category', function (req, res) {
  let { category } = req.params;
  let sql = `SELECT * FROM MyStore WHERE category = $1`;
  client.query(sql, [category], function (err, result) {
    if (err) {
      console.log(err);
      res.status(404).send('Error in fetching data');
    } else res.send(result.rows);
  });
});

app.get('/svr/products/:id', function (req, res) {
  let { id } = req.params;
  let sql = `SELECT * FROM MyStore WHERE id = $1`;
  client.query(sql, [id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(404).send('Error in fetching data');
    } else res.send(result.rows);
  });
});

app.post('/products', function (req, res) {
  let { name, price, category, imgLink, description } = req.body;
  let price2 = +price;

  let sql =
    'INSERT INTO MyStore (category, description, imgLink, name, price) VALUES ($1, $2, $3, $4, $5)';
  client.query(sql, [category, description, imgLink, name, price2], function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send('Error in creating product');
    } else {
      res.status(201).send('Product created successfully');
    }
  });
});

app.put('/products/:id', function (req, res) {
  let { id } = req.params;
  let { name, price, category, imgLink, description } = req.body;

  let sql =
    'UPDATE MyStore SET name = $1, price = $2, category = $3, imgLink = $4, description = $5 WHERE id = $6';
  client.query(sql, [name, price, category, imgLink, description, id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send('Error in updating product');
    } else {
      res.status(200).send('Product updated successfully');
    }
  });
});

app.delete('/products/:id', function (req, res) {
  let { id } = req.params;

  let sql = 'DELETE FROM MyStore WHERE id = $1';
  client.query(sql, [id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send('Error in deleting product');
    } else {
      res.status(200).send('Product deleted successfully');
    }
  });
});

app.get('/orders', function (req, res) {
  let sql = 'SELECT * FROM Orders';
  client.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send('Error in fetching orders');
    } else {
      res.status(200).send(result.rows);
    }
  });
});

app.post('/orders', function (req, res) {
  let { name, address, city, totalPrice, items, email } = req.body;

  let sql =
    'INSERT INTO Orders (name, address, city, totalPrice, items, email) VALUES ($1, $2, $3, $4, $5, $6)';
  client.query(sql, [name, address, city, totalPrice, items, email], function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send('Error in creating order');
    } else {
      res.status(201).send('Order created successfully');
    }
  });
});

app.post('/login', function (req, res) {
  let { email, password } = req.body;

  let sql = 'SELECT * FROM Users WHERE email = $1 AND password = $2';
  client.query(sql, [email, password], function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send('Error in logging in');
    } else {
      if (result.rows.length > 0) {
        res.status(200).json({ email: email, password: password });
      } else {
        res.status(401).send('Invalid username or password');
      }
    }
  });
});

app.post('/register', function (req, res) {
  let { username, password, email } = req.body;

  let sql = 'INSERT INTO Users (username, password, email) VALUES ($1, $2, $3)';
  client.query(sql, [username, password, email], function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send('Error in registering user');
    } else {
      res.status(201).send('User registered successfully');
    }
  });
});





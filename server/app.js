// load environment variables from .env or elsewhere
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const { Item } = require("./models/index")

//Allow CORS requests
app.use(cors());
// logging middleware
app.use(morgan('dev'));
// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve up static files (e.g. html and css files)
app.use(express.static(path.join(__dirname, '../dist')));

// api router
app.use('/api', require('./routes'));

// 404 handler
app.use((req, res) => {
  res.status(404).send({error: '404 - Not Found', message: 'No route found for the requested URL'});
});

// error handling middleware
app.use((error, req, res, next) => {
  console.error('SERVER ERROR: ', error);
  if(res.statusCode < 400) res.status(500);
  res.send({error: error.message, name: error.name, message: error.message, table: error.table});
});


// Below code is potentially needed for - Express Route to GET one Item

app.get("/items/:id", (req, res) => {
  let i = request.params.id -1;
  response.json(items[i])
  })


  // Adding an item
  app.post("/addItem", async (req, res) => {
    const items = await Item.create(req.body);
    res.json(items);
  });

  


module.exports = app;




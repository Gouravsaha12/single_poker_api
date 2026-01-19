const express = require('express');
const morgan = require('morgan'); 
const mongoose = require('mongoose');
const app = express(); 


app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(3000, () => {
  console.log('App listening on port 3000');
});

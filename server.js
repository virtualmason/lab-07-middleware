'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/a', (req,res, err, ) => {
  
  res.status(200).send('Route A');
  
});

app.get('/b/', (req,res) => {
  let number = req.query
  number = Math.sqrt((number));
  res.status(200).send(number);
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.get('/d', (req,res) => {
  throw error;
  res.status(200).send('Route D');
});
app.get('*', function(req, res, next) {
  setImmediate(() => { 
    next(new Error('Ohh!! Something went wrong')); 
  });
});

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const router = require('./routes');
app.get('/a', (req,res, err, ) => {
  res.status(200).send('Route A');
});

app.use(router);
app.use('/b/:id', (req,res) => {
  let number = req.params.id
  let newNum =  Math.pow(number,2);
  res.send({newNum});
});


app.get('*', function(req, res, next) {
    next(new Error('no route')); 
});

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


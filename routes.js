const express = require('express');

const router = express.Router()

router.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

router.get('/d', (req,res,next, error) => {
  es.status(200).send('Route D');
  next()
});

module.exports = router;
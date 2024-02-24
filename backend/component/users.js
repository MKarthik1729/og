const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Users route');
});


router.post('/register', (req, res) => {

  console.log(req.body)

  res.json({ message: 'User created successfully'});
});

router.post('/login', (req, res) => {

  console.log(req.body)

  res.json({ message: 'User created successfully'});
});
module.exports = router;

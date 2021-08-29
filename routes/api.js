const express = require('express');
const router = express.Router();
const whoami = require('../controllers/whoami')

router.get('/', (req, res) => {
  res.send('API')
})

router.get('/whoami', whoami);

module.exports = router;


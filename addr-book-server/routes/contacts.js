const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('all contacts');
})


router.get('/:contactId', function (req, res) {
  res.send(req.params);
})

module.exports = router;

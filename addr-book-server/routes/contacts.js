const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/', function (req, res) {
  res.send('all contacts');
})

router.post('/create', function (req, res) {
  console.log('create');
  const contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  })
  contact.save((function (err) {
    if (err) return console.log(err); // saved!
  }));

  console.log(req.body);
  Contact.find({"name":"test"}, "name", function (err, contacts) {
    if (err) return console.log(err);
    console.log(contacts);

  })
  res.send("success");
})


router.get('/:contactId', function (req, res) {
  res.send(req.params);
})

module.exports = router;

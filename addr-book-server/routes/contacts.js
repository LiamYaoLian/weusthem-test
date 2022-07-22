const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/',  async (req, res) => {
  // TODO
  const contacts = await Contact.find({})
  console.log(contacts)

  res.json({
    status: 200,
    data: contacts
  })
})

router.post('/create', function (req, res) {
  console.log('create');
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  }
  console.log(data)
  const contact = new Contact({
    data
  })
  contact.save((function (err) {
    if (err) {
      console.log(err);
      res.json({
        // TODO
        status: 500,
        message: 'Error creating contact'
      })
    }
  }));

  Contact.find({data}, (err, contact) => {
    console.log(contact);
  })

  // TODO
  res.json({
    status: 200,
    data: data
  })
})


router.get('/:contactId', function (req, res) {
  res.send(req.params);
})

module.exports = router;

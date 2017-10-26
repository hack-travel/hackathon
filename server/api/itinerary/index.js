const express = require('express');
const router = express.Router();
const db = require('../../../db');

router.get('/itineraries', (req, res) => {
  db.User.findAll().then(users => res.status(200).send(users));
});

router.get('/events', (req, res) => {
  db.Event.findAll().then(events => res.status(200).send(events));
});

module.exports = router;

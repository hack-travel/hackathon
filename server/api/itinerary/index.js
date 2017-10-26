const express = require('express');
const router = express.Router();
const db = require('../../../db');
const dummy = require('./dummyData');
const fillInDb = require('./fillInDb');

// db.Event.bulkCreate(fillInDb.events)
//   .then(data => console.log('created! data', data))
//   .catch(err => console.log('err', err));

router.get('/itineraries', (req, res) => {
  db.Itinerary.findAll()
    .then(itins => res.status(200).send(itins /* || dummy.itineraries */))
    .catch(err => res.send(400).send(err));
});

router.get('/events', (req, res) => {
  db.Event.findAll()
    .then(events => res.status(200).send(events /* | dummy.events */))
    .catch(err => res.status(400).send(err));
});

router.post('/events', (req, res) => {
  console.log('req', req.body);
  db.Event.create(req.body)
    .then(result => res.status(200).send(result /* || dummy.events */))
    .catch(err => res.status(400).send(err));
});

router.post('/itineraries', (req, res) => {
  console.log('req', req.body);
  db.Itinerary.create(req.body)
    .then(result => res.status(200).send(result /* || dummy.events */))
    .catch(err => res.status(400).send(err));
});

module.exports = router;

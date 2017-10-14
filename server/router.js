const express = require('express');
const router = require('express').Router();
const profileRoutes = require('./api/profile');
const itineraryRoutes = require('./api/itinerary');
const prepRoutes = require('./api/prep');

router.use('/profile', profileRoutes);

router.use('/itinerary', itineraryRoutes);

router.use('/prep', prepRoutes);

module.exports = router;
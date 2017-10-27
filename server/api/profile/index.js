const express = require('express');
const router = express.Router();
const db = require('../../../db');
const handleGetTwoEvents = require('./controllers/getTwoEventsHandler')

//routes for profile go here
router.get('/getTwoEvents', handleGetTwoEvents);


module.exports = router;
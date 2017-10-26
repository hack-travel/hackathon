const express = require('express');
const router = express.Router();
const db = require('../../../db');

const sequelize = db.sequelize;

router.post('/budget', async (req, res) => {
  try {
    const budget = req.body.budget;
    let result = db.Budget.create({
      Flight: budget.flight,
      Hotel: budget.Hotel,
      Food: budget.food,
      PublicTransport: budget.PublicTransport,
      Souvenirs: budget.Souvenirs,
      EmergencyFund: budget.EmergencyFund
    })
  } catch (e) {
    console.error('prep index.js ln 20', e);
  }
})

module.exports = router;
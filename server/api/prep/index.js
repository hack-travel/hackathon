const express = require('express');
const router = express.Router();
const db = require('../../../db/index');

const sequelize = db.sequelize;

router.post('/budget', async (req, res) => {
  console.log('got in');
  try {
    const budget = req.body;
    console.log('budget',budget);
    let result = await db.Budget.create({
      BudgetName: budget.BudgetName,
      Flight: budget.Flight,
      Hotel: budget.Hotel,
      Food: budget.Food,
      PublicTransport: budget.PublicTransport,
      Souvenirs: budget.Souvenirs,
      EmergencyFund: budget.EmergencyFund
    })
    res.send(result);
  } catch (e) {
    console.error('prep index.js ln 20', e);
  }
})

module.exports = router;
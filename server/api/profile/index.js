const express = require('express');
const router = express.Router();
const db = require('../../../db/index');

router.post('/login', async (req, res) => {
  try {
    const fbProfile = req.body.profile
    console.log(fbProfile)
    let checkForUser = await db.User.find({
      where: {
        fbId: parseInt(fbProfile.id)
      }
    })
    if (checkForUser) {
      res.send('User Exists')
      return;
    }
    let newUser = await db.User.create({
      username: fbProfile.name,
      password: '',
      email: fbProfile.email,
      fbId: parseInt(fbProfile.id),
      sex: fbProfile.gender,
      age: 10
    })
    res.send(newUser)
  } catch (e) {
    console.error(e);
  }
});


module.exports = router;

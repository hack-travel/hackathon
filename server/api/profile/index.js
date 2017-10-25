const express = require('express');
const router = express.Router();
const db = require('../../../db/index');

router.post('/login', (req, res) => {
  const fbProfile = req.body.profile
  console.log(fbProfile)
  db.User.create({
    username: fbProfile.name,
    password: '',
    email: fbProfile.email,
    fbId: parseInt(fbProfile.id),
    sex: fbProfile.gender,
    age: 10,
  })
  .then((data) => {
      res.send(data);
  })
  .catch((e) => {
    console.error(e);
  })
});


module.exports = router;

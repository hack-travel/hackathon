const express = require('express');
const router = express.Router();
const db = require('../../../db');
const handleGetTwoEvents = require('./controllers/getTwoEventsHandler');
const usersAndTagsHandler = require('./controllers/usersAndTagsHandler.js');

//routes for profile go here
router.get('/getTwoEvents', handleGetTwoEvents);

router.post('/insertIntoUsersAndTags', usersAndTagsHandler.insertIntoUsersAndTags);

// router.post('/login', async (req, res) => {
//   try {
//     const fbProfile = req.body.profile
//     console.log(fbProfile)
//     let checkForUser = await db.User.find({
//       where: {
//         fbId: parseInt(fbProfile.id)
//       }
//     })
//     if (checkForUser) {
//       res.send('User Exists')
//       return;
//     }
//     let newUser = await db.User.create({
//       username: fbProfile.name,
//       password: '',
//       email: fbProfile.email,
//       fbId: parseInt(fbProfile.id),
//       sex: fbProfile.gender,
//       age: 10
//     })
//     res.send(newUser)
//   } catch (e) {
//     console.error(e);
//   }
// });


module.exports = router;

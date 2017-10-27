const express = require('express');
const db = require('../../../../db');
const sequelize = db.sequelize;

const handleGetTwoEvents = (req, res) => {
  //math.random twice, must be different
  let id1 = Math.floor((Math.random() * 5) + 1);
  let id2 = Math.floor((Math.random() * 5) + 1);
  while(id1 === id2) {
    id2 = Math.floor((Math.random() * 5) + 1);
  }
  console.log('in handleGetTwo', id2)

  sequelize.query(`SELECT "id", "pictureUrl" FROM "events" ORDER BY RANDOM() LIMIT 2`, { type: sequelize.QueryTypes.SELECT})
  .then((events) => {
    console.log(events)
    
    let eventId1 = events[0].id;
    let eventId2 = events[1].id;
    sequelize.query(`SELECT "tagId" FROM "eventAndTags" WHERE "eventId" = ${eventId1}`, { type: sequelize.QueryTypes.SELECT})
    .then((event1tags) => {
      sequelize.query(`SELECT "tagId" FROM "eventAndTags" WHERE "eventId" = ${eventId2}`, { type: sequelize.QueryTypes.SELECT})
      .then((event2tags) => {
        events[0].tags = event1tags;
        events[1].tags = event2tags;
        console.log(JSON.stringify(events))
        res.status(200).send(events)
      })
    })
  })
  // db.Event.find({where: {id: id1}})
  // .then((event1) => {
  //   db.Event.find({where: {id: id2}})
  //   .then((event2) => {
  //     console.log(event2)
  //     res.status(200).send([event1.dataValues, event2.dataValues]);
  //   })
  //   .catch((err) => {
  //     res.status(404).send(`Error selecting second event ${err}`);
  //   })
  // })
  // .catch((err) => {
  //   res.status(404).send(`Error selecting first event ${err}`);
  // })
}

module.exports = handleGetTwoEvents;
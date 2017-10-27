const express = require('express');
const db = require('../../../../db');
const sequelize = db.sequelize;
const UsersAndTags = db.UserAndTag;

exports.insertIntoUsersAndTags = (req, res) => {
  // If we have the username/id in session then use that in query to table.
  req.body.tags.forEach((tag) => {
    UsersAndTags.findOrCreate({
      where: {
        userId: req.body.userId,
        tagId: tag.tagId
      },
      defaults: {
        count: 1
      }
    })
    .spread((entry, created) => {
      if (!created) {
        entry.update({
          count: entry.count + 1
        })
      }
    })
  });
  res.send('Success')
}
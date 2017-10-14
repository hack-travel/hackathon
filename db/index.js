const Sequelize = require('sequelize');

const sequelize = new Sequelize('hacktravel', 'pengcheng95', 'passwordmajing', {
  host: 'hacktravel.csm1qfcrhywi.us-east-2.rds.amazonaws.com',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully with hacktravel');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// ~~~~~~~~~~~ //
// User Schema //
// ~~~~~~~~~~~ //

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  fbId: Sequelize.INTEGER,
  sex: Sequelize.STRING,
  age: Sequelize.INTEGER
});

User.sync({force: false});

const Tag = sequelize.define('tag', {
  tag: Sequelize.STRING
});

Tag.belongsTo(User);

Tag.sync({force: false});


const Itinerary = sequelize.define('itinerary', {
  name: Sequelize.STRING,
  dateStart: Sequelize.DATE,
  dateEnd: Sequelize.DATE
});

Itinerary.belongsTo(User);

Itinerary.sync({force: false});

const Event = sequelize.define('event', {
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  dateStart: Sequelize.DATE,
  dateEnd: Sequelize.DATE
})

Event.belongsTo(Itinerary);

Event.sync({force: false});

const ItineraryAndTag = sequelize.define('itineraryAndTag', {
})

Tag.belongsToMany(Itinerary, {through: 'itineraryAndTag'});
Itinerary.belongsToMany(Tag, {through: 'itineraryAndTag'});

ItineraryAndTag.sync({force: false});

const UserAndTag = sequelize.define('userAndTag', {
})

User.belongsToMany(Tag, {through: 'userAndTag'});
Tag.belongsToMany(User, {through: 'userAndTag'});

UserAndTag.sync({force: false});

// not too sure how feature three group db will look


module.exports = {
  sequelize: sequelize,
  User: User,
  Tag: Tag,
  Itinerary: Itinerary,
  Event: Event,
  ItineraryAndTag: ItineraryAndTag,
  UserAndTag: UserAndTag
};

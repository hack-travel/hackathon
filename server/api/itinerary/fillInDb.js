
const events = [
  {
    "name": "Met",
    "location": "New York, New York",
    "dateStart": "2012",
    "dateEnd": "2014",
    "pictureUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Adalar_5536.jpg",
    "itineraryId": 2
  },
  {
    "name": "MOMA",
    "location": "New York, New York",
    "dateStart": "2012",
    "dateEnd": "2014",
    "pictureUrl": "https://media.cntraveler.com/photos/53d9d481dcd5888e145a42dc/master/pass/club-reina-istanbul-nightlife.jpg",
    "itineraryId": 2
  }
]

const itineraries = [
  {
    "name": "trip to istanbul",
    "dateStart": new Date(2017, 11, 15),
    "dateEnd": new Date(2017, 11, 16),
  },
  {
    "name": 'trip to new york',
    "dateStart": new Date(2018, 11, 15),
    "dateEnd": new Date(2018, 11, 16),
  }
]

module.exports = {
  itineraries,
  events
};

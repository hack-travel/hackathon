const dummy = {


  events: [
    {
      id: 111,
      name: 'visit buyukada',
      location: 'istanbul, turkey',
      dateStart: new Date(2017, 11, 15),
      dateEnd: new Date(2017, 11, 15),
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Adalar_5536.jpg',
      itineraryId: 211,
    },
    {
      id: 112,
      name: 'go clubbing',
      location: 'istanbul, turkey',
      dateStart: new Date(2017, 11, 16),
      dateEnd: new Date(2017, 11, 16),
      pictureUrl: 'https://media.cntraveler.com/photos/53d9d481dcd5888e145a42dc/master/pass/club-reina-istanbul-nightlife.jpg',
      itineraryId: 211,
    }
  ],
  itineraries: [
    {
      id: 211,
      name: 'trip to istanbul',
      dateStart: new Date(2017, 11, 15),
      dateEnd: new Date(2017, 11, 16),
    },
    {
      id: 212,
      name: 'trip to annecy',
      dateStart: new Date(2018, 11, 15),
      dateEnd: new Date(2018, 11, 16),
    }
  ]
}

module.exports = dummy;
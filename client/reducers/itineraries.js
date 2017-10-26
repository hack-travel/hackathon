const changeItineraries = (itineraries = {}, action) => {
  console.log('changItin reducer', action)
  switch (action.type) {
    case 'CHANGE_ITINERARIES':
      return action.payload;
    default:
      return itineraries;
  }
};

export default changeItineraries;

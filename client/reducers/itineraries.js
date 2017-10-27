const changeItineraries = (itineraries = [], action) => {
  switch (action.type) {
    case 'CHANGE_ITINERARIES':
      return action.payload;
    default:
      return itineraries;
  }
};

export default changeItineraries;

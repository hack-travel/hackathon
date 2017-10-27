const CHANGE_ITINERARIES = 'CHANGE_ITINERARIES';

const changeItineraries = itineraries => {
  console.log('action creator running', itineraries);

  return {
    type: CHANGE_ITINERARIES,
    payload: itineraries,
  }
};

export default changeItineraries;

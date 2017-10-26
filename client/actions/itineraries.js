export const CHANGE_ITINERARIES = 'CHANGE_ITINERARIES';

export const changeItineraries = itineraries => ({
  type: CHANGE_ITINERARIES,
  payload: itineraries,
});

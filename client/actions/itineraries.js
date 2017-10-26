export const CHANGE_ITINERARIES = 'CHANGE_ITINERARIES';

export const changeEvents = itineraries => ({
  type: CHANGE_ITINERARIES,
  payload: itineraries,
});

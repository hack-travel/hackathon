const findOneEventFromItinerary = function url(events, itinerary) {
  console.log('events', events);
  console.log('itinerary', itinerary);
  let answer = events.find(event => event.itineraryId === itinerary.id) || {};
  console.log('event that matches', answer);
  return answer
};

export default findOneEventFromItinerary;
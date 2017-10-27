import jQuery from 'jQuery';

const updateStateFromDb = function(table, actions) {
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": `http://localhost:8080/api/itinerary/${table}`,
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "e9b0e95d-3a50-8d68-c37f-47e16455b61a"
    }
  }

  jQuery.ajax(settings).done(response => {
    console.log('response', response);
    if (table === 'itineraries') {
      actions.changeItineraries(response);
    } else if (table === 'events') {
      actions.changeEvents(response);
    }
  });
}

export default updateStateFromDb;
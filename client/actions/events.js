const CHANGE_EVENTS = 'CHANGE_EVENTS';

const changeEvents = events => ({
  type: CHANGE_EVENTS,
  payload: events,
});

export default changeEvents;
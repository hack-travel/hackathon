export const CHANGE_EVENTS = 'CHANGE_EVENTS';

export const changeEvents = events => ({
  type: CHANGE_EVENTS,
  payload: events,
});
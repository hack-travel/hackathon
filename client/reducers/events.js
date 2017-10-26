const changeEvents = (events = {}, action) => {
  switch (action.type) {
    case 'CHANGE_EVENTS':
      return action.payload;
    default:
      return events;
  }
};

export default changeEvents;

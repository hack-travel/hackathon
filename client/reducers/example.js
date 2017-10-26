const example = (state = 'example', action) => {
  switch (action.type) {
    case 'CHANGE_EXAMPLE':
      return action.payload;
    default:
      return state;
  }
};

export default example;
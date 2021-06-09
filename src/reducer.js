const reducers = (state, action) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return {
        ...state,
        itemId: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;

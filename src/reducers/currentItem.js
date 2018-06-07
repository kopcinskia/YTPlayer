const currentItem = (state = {}, action) => {

  switch (action.type) {
    case 'GET_CURRENT_ITEM':
      return {
        name: action.name,
        url: action.url,
      };
    default:
      return state;
  }
};

export default currentItem;
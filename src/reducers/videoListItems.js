const videoListItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST_ITEM':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          url: action.url,
          selected: false
        }
      ];
    case 'TOGGLE_ITEM_LIST':
      return state.map(itemList =>
        (itemList.id === action.id)
          ? {...itemList, selected: true}
          : {...itemList, selected: false}
      );
    default:
      return state
  }
};

export default videoListItems
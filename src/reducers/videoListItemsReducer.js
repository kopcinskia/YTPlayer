const videoListItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':

      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          link: action.link,
          thumbnails: action.thumbnails,
          description: action.description,
          selected: false
        }

      ];

    case 'DELETE_FROM_FAVOURITE':

      return state.filter(({ id }) => id !== action.id);

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

export default videoListItemsReducer

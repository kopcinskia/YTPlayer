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
    // case 'UPLOAD_VIDEO':
    //   console.log('klik');
    //   return state.map(itemList =>
    //     (itemList.selected == true)
    //     ? {...state, url: action.url, name:action.name}
    //     : {}
    //   );
    default:
      return state
  }
};

export default videoListItems

const searchingListReducer = (state = [], action) => {
  switch (action.type) {
      case 'CREATING_SEARCHING_LIST':

          return(
            action.array.map(seatchItem => ({
              id: seatchItem.id,
              title: seatchItem.title,
              link: seatchItem.link,
              description: seatchItem.description,
              thumbnails: seatchItem.thumbnails.default.url,
            })));

      case 'TOGGLE_ITEM_LIST':
          return state.map(itemList =>
              (itemList.id === action.id)
                  ? {...itemList, selected: true}
                  : {...itemList, selected: false}
          );
    default:
      return state;
  }
};

export default searchingListReducer;

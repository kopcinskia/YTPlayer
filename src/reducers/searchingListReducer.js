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
    default:
      return state;
  }
};

export default searchingListReducer;

const searchingList = (state = [], action) => {
  switch (action.type) {
      case 'CREATING_SEARCHING_LIST':

      return(
        action.array.map(seatchItem => ({
          id: seatchItem.id,
          link: seatchItem.link,
          title: seatchItem.title,
          description: seatchItem.description,
          thumbnails: seatchItem.thumbnails.default.url,
        })));
    default:
      return state;
  }
};

export default searchingList;

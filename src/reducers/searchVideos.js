const searchVideos = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SEARCHED_OBJECT':
      return {
        search: action.search,
      };
    default:
      return state;
  }
};

export default searchVideos;

const currentVideo = (state = {}, action) => {

  switch (action.type) {
    case 'GET_CURRENT_ITEM':
      return {
        title: action.title,
        link: action.link,
      };
    default:
      return state;
  }
};

export default currentVideo;
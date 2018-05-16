import { currentItem } from '../actions/index'

// Do zmiany
const videoPlayer = (state = currentItem, action) => {
  switch (action.type) {
    case 'GET_CRRENT_ITEM':
      console.log('klik');
      return [
    ...state,
      {
        name: action.name,
        url: action.url,
      }
    ];
    default:
      return state;
  }
};

export default videoPlayer;
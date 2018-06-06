import { currentItem } from '../actions/index'

//TODO log się świeci nie ma żądanego efektu

const videoPlayer = (state = currentItem, action) => {

  switch (action.type) {
    case 'GET_CURRENT_ITEM':
      console.log('klik2');
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
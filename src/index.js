import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import App from './components/App'

import videoListItems from './reducers/videoListItems'
import currentVideo from './reducers/currentVideo'
import searchingList from './reducers/searchingList'
import initialState, { seveState } from './initialState'

require('react-bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('./main.css');

//TODO nie ma sensu zamieniać bootstrapa na coś innego
// ogarnij własne csski
// + pre processor SASS


//zagnieżdżony stan !!! https://github.com/reduxjs/redux/blob/master/docs/recipes/reducers/ImmutableUpdatePatterns.md
const rootReducer = combineReducers({
  favourites: combineReducers({
    videoListItems: videoListItems,
    currentVideo: currentVideo
  }),
  // videoListItems: favourites,
  currentVideo: currentVideo,
  searchingList: searchingList,

});

const store = createStore(
  rootReducer,
  initialState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  seveState({
    favourites: store.getState().favourites,
    currentVideo: store.getState().currentVideo,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

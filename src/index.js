import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import App from './components/App'

import videoListItemsReducer from './reducers/videoListItemsReducer'
import currentVideoReducer from './reducers/currentVideoReducer'
import searchingListReducer from './reducers/searchingListReducer'
import initialState, { seveState } from './initialState'

import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'

//TODO
// + pre processor SASS

const rootReducer = combineReducers({
  videoListItems: videoListItemsReducer,
  currentVideo: currentVideoReducer,
  searchingList: searchingListReducer,

});

const store = createStore(
  rootReducer,
  initialState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  seveState({
    videoListItems: store.getState().videoListItems,
    currentVideo: store.getState().currentVideo,
  });
});

ReactDOM.render(
  <Provider store={store} className="yt-player-component-tree">
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

import App from './components/App'
import videoListItems from './reducers/videoListItems'
import currentVideo from './reducers/currentVideo'
import initialState, { seveState } from './initialState'

const rootReducer = combineReducers({
  videoListItems: videoListItems,
  currentVideo: currentVideo,
});

const store = createStore(
  rootReducer,
  initialState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  seveState({
    videoListItems: store.getState().videoListItems,
      currentVideo: store.getState().currentVideo
  });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

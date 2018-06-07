import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

import App from './components/App'
import videoListItems from './reducers/videoListItems'
import currentVideo from './reducers/currentVideo'

const rootReducer = combineReducers({
  videoListItems: videoListItems,
  currentVideo: currentVideo,
});

const initialState = {
  videoListItems: [
    {
      id: 0,
      name: 'Two Feet - Go Fuck Yourself',
      url: 'https://www.youtube.com/watch?v=SEptMnVlsJY',
      selected: false,
    },
    {
      id: 1,
      name: 'PatFlynn',
      url: 'https://www.youtube.com/watch?v=CdXEkHJhiVM',
      selected: false,
    },
    {
      id: 2,
      name: 'SimpleProgrammer',
      url: 'https://www.youtube.com/watch?v=AczzKgTeR2A',
      selected: false,
    },
    {
      id: 3,
      name: 'MiroBurn',
      url: 'https://www.youtube.com/watch?v=cMXd01u8Zmg',
      selected: false,
    },
    {
      id: 4,
      name: 'Chilled Serenity',
      url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
      selected: false,
    },
  ],

  currentVideo: {
    name: 'AAAAAAAAAAAaaa',
    url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  }
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

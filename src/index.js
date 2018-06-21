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

require('react-bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('./main.css');


//TODO akcja pomiędzy stanami w zagnieżdźonym
// wywoływanie jednej akcji zmieniającej dwa reducery to niezbyt dobry pomysł....
// nie dokońca dobra praktyka: https://github.com/reduxjs/redux/issues/749
// lepsze rozwiązanie (zaproponowane przez twórców reduxa): https://redux.js.org/recipes/computing-derived-data
//TODO
// + pre processor SASS
// Zmień nzawy reducerów na Red z tyłu albo z przodu

const rootReducer = combineReducers({
  favourites: combineReducers({
    videoListItems: videoListItemsReducer,
    currentVideo: currentVideoReducer
  }),
  searchingList: searchingListReducer,

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

import { combineReducers } from 'redux'
import videoListItems from './videoListItems'
import currentItem from './currentItem'


export default combineReducers({
  videoListItems,
  currentItem,
})

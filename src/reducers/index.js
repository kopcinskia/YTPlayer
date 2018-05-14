import { combineReducers } from 'redux'
import videoListItems from './videoListItems'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  videoListItems,
  visibilityFilter,
})

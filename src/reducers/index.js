import { combineReducers } from 'redux'
import videoListItems from './videoListItems'
import videoPlayer from './videoPlayer'

export default combineReducers({
  videoListItems,
  videoPlayer,
})

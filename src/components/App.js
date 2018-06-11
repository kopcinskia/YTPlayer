import React from 'react'
import AddListItem from '../containers/addListItemContainer'
import VisibleVideoList from '../containers/videoListContainer'
import Player from '../containers/playerContainer'
import SearchVideos from '../containers/searchVideoContainer'

const App = () => (
  <div>
    <AddListItem />
    <VisibleVideoList />
    <SearchVideos />
    <Player />
  </div>
);

export default App

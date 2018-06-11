import React from 'react'
import AddListItem from '../containers/addListItemContainer'
import FavouriteVideoList from '../containers/videoListContainer'
import Player from '../containers/playerContainer'
import SearchVideos from '../containers/searchVideoContainer'

const App = () => (
  <div>
    <AddListItem />
    <FavouriteVideoList />
    <SearchVideos />
    <Player />
  </div>
);

export default App

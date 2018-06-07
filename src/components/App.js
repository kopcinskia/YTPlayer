import React from 'react'
import AddListItem from '../containers/addListItemContainer'
import VisibleVideoList from '../containers/videoListContainer'
import Player from '../containers/playerContainer'

const App = () => (
  <div>
    <AddListItem />
    <VisibleVideoList />
    <Player />
  </div>
);

export default App

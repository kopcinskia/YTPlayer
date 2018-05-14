import React from 'react'
import AddListItem from '../containers/AddListItem'
import VisibleVideoList from '../containers/VisibleVideoList'
import Player from '../components/Player'

const App = () => (
  <div>
    <AddListItem />
    <VisibleVideoList />
    <Player/>
  </div>
);

export default App

import React from 'react'
import AddListItem from '../containers/AddListItem'
import VisibleVideoList from '../containers/VisibleVideoList'
import PlayerBar from '../containers/PlayerBar'

const App = () => (
  <div>
    <AddListItem />
    <VisibleVideoList />
    <PlayerBar/>
  </div>
);

export default App

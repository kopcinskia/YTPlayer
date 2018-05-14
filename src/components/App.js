import React from 'react'
import AddListItem from '../containers/AddListItem'
import VisibleVideoList from '../containers/VisibleVideoList'
import PlayerBar from '../components/Player'

const App = () => (
  <div>
    <AddListItem />
    <VisibleVideoList />
    <PlayerBar/>
  </div>
);

export default App

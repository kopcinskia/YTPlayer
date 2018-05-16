import React from 'react'
import AddListItem from '../containers/AddListItem'
import VisibleVideoList from '../containers/VisibleVideoList'
import PlayerBar from '../containers/PlayerBar'

// problem z przekazaniem propsów do Player ze stanu videoPlayer
// akcja którą trzeba przenieś to currentItem
// możliwe rozwiązanie:
//
// instalacja przeglądarkowego narzędzie do reduxa i zamieszczenie logiki w akcji albo w reducerach

const App = () => (
  <div>
    <AddListItem />
    <VisibleVideoList />
    <PlayerBar/>
  </div>
);

export default App

import React from 'react'
import AddListItem from '../containers/addListItemContainer'
import VisibleVideoList from '../containers/videoListContainer'
import Player from '../containers/playerContainer'

let search = require('youtube-search');

const opts = {
  //TODO !!!!!!!!!!!!!!!!@@@@@@@@@@@!!!!!!!!!!!!!!!!
  // querrySearch zmień na zmienną + input do zmiennej
  // stwórz kolejny stan listy na wzór swojej listy która będzie wyciągała potrzebnego Ci Jsona razem z Urlami obrazków
  // Obrazki będą bardzo głębokim komponentem w drzecie Itemka w liście
  // Itemek powinien posiadać {
  // ---Obrazek
  // ---Tytuł
  // ---Przycisk Dodaj do listy
  // ---Validację
  // ---ToolTipkek
  //         EWETUALNIE
  // ---Channel Title
  // ---Chanel Id z linkiem na kanał
  // ---Link do Youtuba
  // }
  querySearch: 'jaja',
  maxResults: 50,
  key: 'AIzaSyCNSPr_DNFZasLvR_ygqeieKYwlbuh5GCw'
};

search(opts.querySearch, opts, function(err, results) {
  if(err) return console.error(err, 'Search list ERR!!');

  console.dir(results);
});


const App = () => (
  <div>
    <AddListItem />
    <VisibleVideoList />
    <Player />
  </div>
);

export default App

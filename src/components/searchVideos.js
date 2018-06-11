import React from 'react'
import PropTypes from 'prop-types'

const search = require('youtube-search');
const opts =  {
  //TODO !!!!!!!!!!!!!!!!@@@@@@@@@@@!!!!!!!!!!!!!!!!
  // stwórz kolejny stan listy na wzór swojej listy która będzie wyciągała potrzebnego Ci Jsona razem z Urlami obrazków
  // Obrazki będą bardzo głębokim komponentem w drzecie Itemka w liście
  // Itemek powinien posiadać {
  // ---Obrazek
  // ---Tytuł

  // ---Przycisk Dodaj do listy
  // ---Validację
  //
  // ---ToolTipkek

  //         EWETUALNIE
  // ---Channel Title
  // ---Chanel Id z linkiem na kanał
  // ---Link do Youtuba
  // }
  maxResults: 50,
  key: 'AIzaSyCNSPr_DNFZasLvR_ygqeieKYwlbuh5GCw'
};


const SearchVideos = ({ getSearchedObject, searchedObject }) => {
  let searchInput;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (searchInput.value.trim())  {
          getSearchedObject(searchInput.value);
        } else {

          //TODO ulepsz walidację

          alert('Wpisz poprawne dane w formularzu SEARCH!!!!')
        }
      }}>
        <input ref={node => searchInput = node} />
        <button type="submit">
          Search
        </button>
      </form>
      <div>
        {searchedObject.search}
      </div>
      <div>
        {
          //TODO
          //Wywal to w reducer i stwórz state dla wyników wyszukiwania

          search(searchedObject.search, opts, function(err, results) {
            if(err) return console.error(err, 'Search list ERR!!');

            console.dir(results);
          })
        }
      </div>
    </div>
  )
};

SearchVideos.propTypes = {
  searchedObject: PropTypes.shape({
    search: PropTypes.string,
  }),
  getSearchedObject: PropTypes.func,
};

export default SearchVideos;

import React from 'react'
import PropTypes from 'prop-types'

const SearchVideos = ({ searchVideos, searchVideoItem }) => {
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

  let searchInput;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (searchInput.value.trim())  {
          searchVideos(searchInput.value);
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
        {searchVideoItem.search}
      </div>
      <div>
        {
          //TODO
          //Wywal to w reducer i stwórz state dla wyników wyszukiwania

          search(searchVideoItem.search, opts, function(err, results) {
            if(err) return console.error(err, 'Search list ERR!!');

            console.dir(results);
          })
        }
      </div>
    </div>
  )
};

SearchVideos.propTypes = {
  searchVideoItem: PropTypes.shape({
    search: PropTypes.string,
  }),
  searchVideos: PropTypes.func,
};

export default SearchVideos;

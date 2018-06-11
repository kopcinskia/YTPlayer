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
  maxResults: 2,
  key: 'AIzaSyCNSPr_DNFZasLvR_ygqeieKYwlbuh5GCw'
};


const SearchVideosInput = ({ getSearchedObject, searchedObject, createSearchingList, searchingList }) => {
  let searchInput;

  return (
    <div>
      {console.log(searchingList, 'Ale Jazda')}
      <form onSubmit={e => {
        e.preventDefault();
        if (searchInput.value.trim())  {
          //Refaktor Nie potrzebujesz tylu rzeczy przechowywać w stanie
          //Zastanów się nad dobrym podziałem
          getSearchedObject(searchInput.value);
          search(searchedObject.search, opts, function (err, results) {
            if (err) return console.error(err, 'Search list ERR!!');

            createSearchingList(results);
          })
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
    </div>
  )
};

SearchVideosInput.propTypes = {
  searchedObject: PropTypes.shape({
    search: PropTypes.string,
  }),
  searchingList: PropTypes.shape({
    id: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  getSearchedObject: PropTypes.func,
  createSearchingList: PropTypes.func,
};

export default SearchVideosInput;

import React from 'react'
import PropTypes from 'prop-types'

const search = require('youtube-search');
const opts =  {
  maxResults: 20,
  key: 'AIzaSyCNSPr_DNFZasLvR_ygqeieKYwlbuh5GCw'
};

const SearchVideosInput = ({ createSearchingList }) => {
  let searchInput;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (searchInput.value.trim())  {

        search(searchInput.value, opts, function (err, results) {

          if (err) return console.error(err, 'Search list ERR!!');
          createSearchingList(results);
        })
      } else {

        //TODO ulepsz walidację
        //przykład validacji -> https://github.com/Remchi/reddice/blob/master/client/components/login/LoginForm.js

        alert('Wpisz poprawne dane w formularzu SEARCH!!!!')
      }
      searchInput.value = '';
    }}>
      <input ref={node => searchInput = node} />
      <button type="submit">
        Search
      </button>
    </form>
  )
};

SearchVideosInput.propTypes = {
  createSearchingList: PropTypes.func,
};

export default SearchVideosInput;

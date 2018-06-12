import React from 'react'
import PropTypes from 'prop-types'

import SearchingInput from './searchingInput'
import SearchingList from './searchingList'

//TODO ogarnij:
// przewijane menu ze csrollem
// stałą szerokość dla itemków
// background
// widoczne obrycowania itemków i klase active na klikany itemek
// wykorzystaj metody z favouritów

const SearchVideos = ({ createSearchingList, searchingList }) => {
  return (
    <div>
      <SearchingInput
        createSearchingList={createSearchingList}

      />
      <SearchingList
        searchingList={searchingList}
      />
    </div>
  )
};

SearchVideos.propTypes = {
  searchingList: PropTypes.arrayOf(PropTypes.shape({
  })),
  createSearchingList: PropTypes.func,
};

export default SearchVideos;
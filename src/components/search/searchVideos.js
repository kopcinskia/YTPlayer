import React from 'react'
import PropTypes from 'prop-types'

import SearchingInput from './searchingInput'
import DefaultList from '../defaults/defaultList'


//TODO ogarnij:
// walidacja pustej tablicy z YT albo default + walidacja
// przewijane menu ze csrollem
// stałą szerokość dla itemków
// background
// widoczne obrycowania itemków i klase active na klikany itemek

const SearchVideos = ({ createSearchingList, searchingList, toggleListItem, getCurrentItem }) => {
  return (
    <div>
      <SearchingInput
        createSearchingList={createSearchingList}
      />
      <DefaultList
        defaultList={searchingList} toggleListItem={toggleListItem} getCurrentItem={getCurrentItem}
      />
    </div>
  )
};

SearchVideos.propTypes = {
  searchingList: PropTypes.arrayOf(PropTypes.shape({
  })),
  createSearchingList: PropTypes.func,
  toggleListItem: PropTypes.func.isRequired,
  getCurrentItem: PropTypes.func.isRequired,
};

export default SearchVideos;

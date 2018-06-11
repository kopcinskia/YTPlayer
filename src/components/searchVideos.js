import React from 'react'
import PropTypes from 'prop-types'

import SearchingInput from './searchingInput'
import SearchingList from './searchingList'

const SearchVideos = ({ getSearchedObject, searchedObject, createSearchingList, searchingList }) => {
  return (
    <div>
      <SearchingInput
        getSearchedObject={getSearchedObject}
        searchedObject={searchedObject}
        createSearchingList={createSearchingList}

      />
      <SearchingList
        searchingList={searchingList}
      />
    </div>
  )
};

SearchVideos.propTypes = {
  searchedObject: PropTypes.shape({
    search: PropTypes.string,
  }),
  searchingList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  })),
  getSearchedObject: PropTypes.func,
  createSearchingList: PropTypes.func,
};

export default SearchVideos;

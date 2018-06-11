import React from 'react'
import PropTypes from 'prop-types'

import SearchListItem from './searchListItem'

const SearchingList = ({ searchingList }) => {
  return (
    <ul>
      {searchingList.map(searchingListItem =>
        <li key={searchingListItem.id}>
          <SearchListItem
            {...searchingListItem}
          />
        </li>
      )}
    </ul>
  )

};

SearchingList.propTypes = {
  searchingList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
};

export default SearchingList;

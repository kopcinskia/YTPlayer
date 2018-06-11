import React from 'react'
import PropTypes from 'prop-types'

import SearchListItem from './searchListItem'

const SearchingList = ({ searchingList }) => {
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>
            Name:
          </th>
          <th>
            URL:
          </th>
          <th>
            COŚTAM:
          </th>
        </tr>
        </thead>
        <tbody>
        {searchingList.map(searchingListItem =>
          <SearchListItem
            key={searchingListItem.id}
            {...searchingListItem}
          />
        )}
        </tbody>
      </table>
    </div>
  )

};

SearchingList.propTypes = {
  searchingList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
};

export default SearchingList;

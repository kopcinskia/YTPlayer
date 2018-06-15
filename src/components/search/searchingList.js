import React from 'react'
import PropTypes from 'prop-types'

import ListItem from '../ListItem'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const SearchingList = ({ searchingList }) => {
  return (
    <ListGroup>

      {searchingList.map(searchingListItem =>
        <ListGroupItem key={searchingListItem.id}>
          <ListItem
            {...searchingListItem}
          />
        </ListGroupItem>
      )}
    </ListGroup>
  )

};

SearchingList.propTypes = {
  searchingList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
};

export default SearchingList;

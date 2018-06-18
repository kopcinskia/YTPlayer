import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './listItem'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const DefaultList = ({ defaultList, toggleListItem, getCurrentItem}) => {
  return (
    <ListGroup>

      {defaultList.map(searchingListItem =>
        <ListGroupItem key={searchingListItem.id}>
          <ListItem
            {...searchingListItem}
            onClick={() => {toggleListItem(searchingListItem.id); getCurrentItem(searchingListItem.title, searchingListItem.link)}}
          />
        </ListGroupItem>
      )}
    </ListGroup>
  )

};

DefaultList.propTypes = {
  defaultList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
    toggleListItem: PropTypes.func.isRequired,
    getCurrentItem: PropTypes.func.isRequired,
};

export default DefaultList;

import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './listItem'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

// zmień onClick na bardziej rozgarnięty

const DefaultList = ({ defaultList, toggleListItem, getCurrentItem}) => {
  return (
    <ListGroup>

      {defaultList.map(defaultListItem =>
        <ListGroupItem key={defaultListItem.id}>
          <ListItem
            {...defaultListItem}
            onClick={() => {toggleListItem(defaultListItem.id); getCurrentItem(defaultListItem.title, defaultListItem.link)}}
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

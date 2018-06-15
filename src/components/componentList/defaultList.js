import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './ListItem'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const defaultList = ({ defaultList }) => {
  return (
    <ListGroup>

      {defaultList.map(searchingListItem =>
        <ListGroupItem key={searchingListItem.id}>
          <ListItem
            {...searchingListItem}
          />
        </ListGroupItem>
      )}
    </ListGroup>
  )

};

defaultList.propTypes = {
  defaultList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
};

export default defaultList;

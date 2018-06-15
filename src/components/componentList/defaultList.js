import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './listItem'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const DefaultList = ({ defaultList }) => {
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

DefaultList.propTypes = {
  defaultList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
};

export default DefaultList;

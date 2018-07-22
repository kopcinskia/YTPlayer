import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './listItem'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'

// zmień onClick na bardziej rozgarnięty

const DefaultList = ({ defaultList, toggleListItem, getCurrentItem, bsStyle, btFunc}) => {
  return (
    <ListGroup>

      {defaultList.map(defaultListItem =>
        <ListGroupItem key={defaultListItem.id}>
          <ListItem
            {...defaultListItem}
            onClick={() => {toggleListItem(defaultListItem.id); getCurrentItem(defaultListItem.title, defaultListItem.link)}}
          />
          <Button bsSize='large' onClick={() => {btFunc(defaultListItem.title, defaultListItem.link, defaultListItem.thumbnails, defaultListItem.description)}}
                  bsStyle={bsStyle}
          >
              {bsStyle === 'success'? '+' : '-'}
          </Button>
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
  bsStyle: PropTypes.string,
  btFunc: PropTypes.func,
};

export default DefaultList;

import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './listItem'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'

// zmień onClick na bardziej rozgarnięty

const DefaultList = ({ defaultList, toggleListItem, getCurrentItem, bsStyle, btFuncAdd, btFuncDel}) => {
  return (
    <ListGroup>

      {defaultList.map(defaultListItem =>
        <ListGroupItem key={defaultListItem.id}>
          <ListItem
            {...defaultListItem}
            onClick={() => {toggleListItem(defaultListItem.id); getCurrentItem(defaultListItem.title, defaultListItem.link)}}
          />
          {bsStyle === 'success'?
            <Button bsSize='large' onClick={() => {btFuncAdd(defaultListItem.title, defaultListItem.link, defaultListItem.thumbnails, defaultListItem.description)}}
                    bsStyle={bsStyle}
            >+</Button>
          :
            <Button bsSize='large' onClick={() => {btFuncDel(defaultListItem.id)}}
                    bsStyle={bsStyle}
            >-</Button>
          }
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
  btFuncAdd: PropTypes.func,
  btFuncDel: PropTypes.func,
};

export default DefaultList;

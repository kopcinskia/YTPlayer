import React from 'react'
import PropTypes from 'prop-types'
import { Media } from 'react-bootstrap'

const ListItem = ({ onClick, link, title, description, thumbnails, selected }) => (
<a
    onClick={onClick}
    style={{
        textDecoration: selected ? 'underline' : 'none'
    }}
>
  <Media>
    <Media.Body>
      <Media.Heading>{title}</Media.Heading>
      <p>
        {description}
      </p>
    </Media.Body>
    <Media.Right>
        <img width={128} height={64} src={thumbnails} alt="thumbnail" />
    </Media.Right>
  </Media>
</a>
);

ListItem.propTypes = {
  oneOfItems: PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      thumbnails: PropTypes.string,
      selected: PropTypes.bool,
  }),
  onClick: PropTypes.func,
};

export default ListItem

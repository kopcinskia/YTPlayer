import React from 'react'
import PropTypes from 'prop-types'
import { Media } from 'react-bootstrap'

const ListItem = ({ link, title, description, thumbnails }) => (
<div>
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
</div>
);

ListItem.propTypes = {
  OneItem: {
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnails: PropTypes.string,
  }
};

export default ListItem

import React from 'react'
import PropTypes from 'prop-types'

const VideoListItem = ({ onClick, selected, title, link }) => (
  <tr
    onClick={onClick}
    style={{
      textDecoration: selected ? 'underline' : 'none'
    }}
  >
    <th>
      {title}
    </th>
    <th>
      {link}
    </th>
  </tr>
);

VideoListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default VideoListItem

import React from 'react'
import PropTypes from 'prop-types'

const VideoListItem = ({ onClick, selected, name, url }) => (
  <tr
    onClick={onClick}
    style={{
      textDecoration: selected ? 'underline' : 'none'
    }}
  >
    <th>
      {name}
    </th>
    <th>
      {url}
    </th>
  </tr>
);

VideoListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default VideoListItem

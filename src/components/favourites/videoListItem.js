import React from 'react'
import PropTypes from 'prop-types'

const VideoListItem = ({ onClick, selected, link, title, description, thumbnails }) => (
  <tr
    onClick={onClick}
    style={{
      textDecoration: selected ? 'underline' : 'none'
    }}
  >
    <th>
      {link}
    </th>
    <th>
      {title}
    </th>
    <th>
      {description}
    </th>
    <th>
      {thumbnails}
    </th>
  </tr>
);

VideoListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnails: PropTypes.string,
};

export default VideoListItem

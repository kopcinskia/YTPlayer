import React from 'react'
import PropTypes from 'prop-types'

const SearchListItem = ({ link, title, description, thumbnails }) => (
  <tr>
    <th>
      {title}
    </th>
    <th>
      {link}
    </th>
    <th>
      {description}
    </th>
    <th>
      {thumbnails}
    </th>
  </tr>
);

SearchListItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnails: PropTypes.shape
};

export default SearchListItem

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
      <img src={thumbnails} alt="brzydkie obrazki"/>
    </th>
  </tr>
);

SearchListItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnails: PropTypes.string,
};

export default SearchListItem

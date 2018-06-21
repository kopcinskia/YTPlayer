import React from 'react'
import PropTypes from 'prop-types'

import DefaultList from '../defaults/defaultList'

const VideoList = ({ videoListItems, toggleListItem, getCurrentItem}) => (
    <div>
      <DefaultList
        defaultList={videoListItems} toggleListItem={toggleListItem} getCurrentItem={getCurrentItem}
      />
    </div>
  )

VideoList.propTypes = {
  videoListItems: PropTypes.array.isRequired,
  toggleListItem: PropTypes.func.isRequired,
  getCurrentItem: PropTypes.func.isRequired,
};

export default VideoList;






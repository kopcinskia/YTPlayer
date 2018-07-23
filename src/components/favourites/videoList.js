import React from 'react'
import PropTypes from 'prop-types'

import DefaultList from '../defaults/defaultList'

const VideoList = ({ videoListItems, toggleListItem, getCurrentItem, deleteFromFavourite}) => (
    <div className="favourites-video-tab">
      <DefaultList
        defaultList={videoListItems} toggleListItem={toggleListItem} getCurrentItem={getCurrentItem}
        btFuncDel={deleteFromFavourite} bsStyle={'danger'}
      />
    </div>
  )

VideoList.propTypes = {
  videoListItems: PropTypes.array.isRequired,
  toggleListItem: PropTypes.func.isRequired,
  getCurrentItem: PropTypes.func.isRequired,
  deleteFromFavourite: PropTypes.func,
};

export default VideoList;






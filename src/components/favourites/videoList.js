import React from 'react'
import PropTypes from 'prop-types'

import DefaultList from '../defaults/defaultList'
import AddListItem from './addListItem'

const VideoList = ({ videoListItems, toggleListItem, getCurrentItem, addListItem}) => (
    <div>
      <AddListItem addListItem={addListItem}/>
      <DefaultList
        defaultList={videoListItems} toggleListItem={toggleListItem} getCurrentItem={getCurrentItem}
      />
    </div>
  )

VideoList.propTypes = {
  videoListItems: PropTypes.array.isRequired,
  toggleListItem: PropTypes.func.isRequired,
  getCurrentItem: PropTypes.func.isRequired,
  addListItem: PropTypes.func.isRequired,
};

export default VideoList;






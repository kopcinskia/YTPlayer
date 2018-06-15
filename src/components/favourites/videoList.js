import React from 'react'
import PropTypes from 'prop-types'

import VideoListItem from './videoListItem'

const VideoList = ({ videoListItems, toggleListItem, getCurrentItem}) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>
            Name:
          </th>
          <th>
            URL:
          </th>
        </tr>
      </thead>
      <tbody>
        {videoListItems.map(videoListItem =>
          <VideoListItem
            key={videoListItem.id}
            {...videoListItem}
            onClick={() => {toggleListItem(videoListItem.id); getCurrentItem(videoListItem.title, videoListItem.link)}}
          />
        )}
      </tbody>
    </table>
  </div>

);

VideoList.propTypes = {
  videoListItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnails: PropTypes.string,
  }).isRequired),
  toggleListItem: PropTypes.func.isRequired,
  getCurrentItem: PropTypes.func.isRequired,
};



export default VideoList

import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import VideoListItem from './VideoListItem'


//TODO Śmietnik trzeba upożądkować

const VideoList = ({ videoListItems, toggleListItem, getCurrentItem, currentVideo}) => (
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
            onClick={() => {toggleListItem(videoListItem.id); getCurrentItem(videoListItem.name, videoListItem.url)}}
          />
        )}
      </tbody>
    </table>
    <ReactPlayer
      url={currentVideo.url}
      controls
    />
  </div>

);

VideoList.propTypes = {
  videoListItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired),
  toggleListItem: PropTypes.func.isRequired,
  getCurrentItem: PropTypes.func.isRequired,
  currentVideo: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  })
};



export default VideoList

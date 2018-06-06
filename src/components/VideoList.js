import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import VideoListItem from './VideoListItem'


//TODO Śmietnik trzeba upożądkować

const VideoList = ({ videoListItems, toggleListItem, currentItem, videoPlayer }) => (
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
            onClick={() => {toggleListItem(videoListItem.id); currentItem(videoListItem.name, videoListItem.url)}}
          />
        )}
      </tbody>
    </table>
    <ul>
      <li>{videoPlayer}</li>
      <li>{videoListItems.map(i =>
        i.selected === true ? console.log(videoPlayer) : i.url)}</li>
      <li>{'Default'}</li>
      <li>
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
          controls
        />
      </li>
    </ul>
  </div>
);

VideoList.propTypes = {
  videoListItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  toggleListItem: PropTypes.func.isRequired,
  currentItem: PropTypes.func.isRequired,

  videoPlayer: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  }))
};

export default VideoList

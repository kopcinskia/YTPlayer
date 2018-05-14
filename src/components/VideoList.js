import React from 'react'
import PropTypes from 'prop-types'
import VideoListItem from './VideoListItem'

const VideoList = ({ videoListItems, toggleListItem, currentItem }) => (
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
            onClick={() => toggleListItem(videoListItem.id)}
          />

        )}
      </tbody>
    </table>
    <button onClick={() => currentItem(videoListItems)}></button>
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
  currentIitem: PropTypes.func
};

export default VideoList

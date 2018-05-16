import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'


// Do zmiany
const Player = ({ videoListItems, videoPlayer }) => {

  return (
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
  );
};

Player.propTypes = {
  videoListItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired).isRequired,

  videoPlayer: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  }))
};

export default Player;
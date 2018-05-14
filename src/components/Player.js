import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

const Player = ({url, name}) => (
      <ul>
        <li>{name}</li>
        <li>
          <ReactPlayer
          url={url}
          playing
          controls
          />
        </li>
      </ul>
    );

Player.defaultProps = {
  url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  name: 'Default'
};

Player.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
};

export default Player;
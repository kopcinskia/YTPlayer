import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

const Player = ({name, url}) => (
      <ul>
        <li>{name}</li>
        <li>
          <ReactPlayer
          url={url}
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
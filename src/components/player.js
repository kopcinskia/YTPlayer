import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

//TODO kontrolki i opcje do playera np wyciemniane (MODAL)
const Player = ({currentVideo}) => (
  <div>
    <ReactPlayer
      url={currentVideo.url}
      controls
    />
  </div>

);

Player.propTypes = {
  currentVideo: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  }),
};



export default Player

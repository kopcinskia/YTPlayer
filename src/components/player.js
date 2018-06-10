import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

const Player = ({currentVideo, searchVideos}) => (
  <div>
    <div>
        {searchVideos.search}
    </div>
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
    searchVideos: PropTypes.shape({
        search: PropTypes.string,
    })
};



export default Player

import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { Grid } from 'react-bootstrap'

//TODO kontrolki i opcje do playera np wyciemniane (MODAL)
const Player = ({currentVideo}) => (
  <Grid>
    <ReactPlayer
      url={currentVideo.link}
      controls
    />
  </Grid>

);

Player.propTypes = {
  currentVideo: PropTypes.shape({
    link: PropTypes.string
  }),
};



export default Player

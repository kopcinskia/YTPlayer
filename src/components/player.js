import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { Grid, Col } from 'react-bootstrap'

//TODO kontrolki i opcje do playera np wyciemniane (MODAL)
const Player = ({currentVideo}) => (
  <Grid className="yt-grid">
    <Col sm={12}>
      <ReactPlayer className="yt-player"
         url={currentVideo.link}
         controls
         width="100%"
         height="250px"
      />
    </Col>
  </Grid>

);

Player.propTypes = {
  currentVideo: PropTypes.shape({
    link: PropTypes.string
  }),
};



export default Player

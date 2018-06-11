import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import AddListItem from '../containers/addListItemContainer'
import FavouriteVideoList from '../containers/videoListContainer'
import Player from '../containers/playerContainer'
import SearchVideos from '../containers/searchVideoContainer'

export default class App extends React.Component{

    render() {

    return(
      <Grid className='container-fluid'>
        <Row className='show-grid'>
          <Col sm={12} md={6}>
            <AddListItem />
            <FavouriteVideoList />
          </Col>
          <Col sm={12} md={6}>
              <Player />
          </Col>
          <Col sm={12} md={12}>
            <SearchVideos />
          </Col>
        </Row>
      </Grid>
    );
  }
}


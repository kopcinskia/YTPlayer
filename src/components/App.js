import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import Player from '../containers/playerContainer'
import ListTabs from './listTabs'

export default class App extends React.Component{

    render() {

    return(
      <Grid className='container-fluid'>
        <Row className='show-grid'>
          <Col sm={12} md={6}>
            <ListTabs />
          </Col>
          <Col sm={12} md={6}>
            <Player />
          </Col>
        </Row>
      </Grid>
    );
  }
}


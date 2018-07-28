import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import Player from '../containers/playerContainer'
import ListTabs from './listTabs'

const App = () => {

  return(
    <Grid className='container-fluid'>
      <Row className='show-grid'>
        <Col sm={12} lg={6}>
          <Player />
        </Col>
        <Col sm={12} lg={6}>
          <ListTabs className="list-tabs"/>
        </Col>

      </Row>
    </Grid>
  );
}

export default App
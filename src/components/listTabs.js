import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import FavouriteVideoList from '../containers/videoListContainer'
import SearchVideos from '../containers/searchVideoContainer'

const ListTabs = () => {

    return (
      <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example" className="list-tabs">
        <Tab eventKey={1} title="Tab 1">
          <FavouriteVideoList />
        </Tab>
        <Tab eventKey={2} title="Tab 2">
          <SearchVideos />
        </Tab>
      </Tabs>
    );
}

export default ListTabs;

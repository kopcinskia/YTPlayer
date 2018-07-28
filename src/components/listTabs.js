import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import FavouriteVideoList from '../containers/videoListContainer'
import SearchVideos from '../containers/searchVideoContainer'

const ListTabs = () => {

    return (
      <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example" className="tabs">
        <Tab eventKey={1} title="Favourites" className="tab">
          <FavouriteVideoList />
        </Tab>
        <Tab eventKey={2} title="Search" className="tab">
          <SearchVideos />
        </Tab>
      </Tabs>
    );
}

export default ListTabs;

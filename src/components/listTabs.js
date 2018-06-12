import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import AddListItem from '../containers/addListItemContainer'
import FavouriteVideoList from '../containers/videoListContainer'
import SearchVideos from '../containers/searchVideoContainer'

 //todo https://www.youtube.com/watch?v=jgVkR5EKI68
class ListTabs extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
        <Tab eventKey={1} title="Tab 1">
          <AddListItem />
          <FavouriteVideoList />
        </Tab>
        <Tab eventKey={2} title="Tab 2">
          <SearchVideos />
        </Tab>
      </Tabs>
    );
  }
}

export default ListTabs;

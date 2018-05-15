import { connect } from 'react-redux'
import { currentItem } from '../actions'
import Player from '../components/Player'

const getCurrentItem = (videoListItems) => {
  // videoListItems.map(itemList => {
  //   if(itemList.selected) {
  //     console.log(currentItem(itemList.name, itemList.url));
  //     return currentItem(itemList.name, itemList.url)
  //   }
  // });

};

const mapStateToProps = state => ({
  // videoPlayer: getCurrentItem(state.videoListItems)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

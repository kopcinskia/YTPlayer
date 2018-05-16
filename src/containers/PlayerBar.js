import { connect } from 'react-redux'
import { currentItem } from '../actions'
import Player from '../components/Player'

//Do zmiany
const getCurrentItem = (videoListItems) => {
  videoListItems.map(itemList => {
    if(itemList.selected) {
      let Item = (currentItem(itemList.name, itemList.url));
      return Item;
    }
  });

};

const mapStateToProps = state => ({
  videoPlayer: getCurrentItem(state.videoListItems, 'GET_CURRENT_ITEM'),
  videoListItems: state.videoListItems
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

import { connect } from 'react-redux'
import { toggleListItem } from '../actions'
import Player from '../components/Player'

let currentName;
let currentUrl;

const getCurrentItem = (videoListItems) => {
  videoListItems.map(itemList => {
    if(itemList.selected) {
      currentName = itemList.name;
      currentUrl = itemList.url;
    }
  });
};

const mapStateToProps = state => ({
  videoListItems: getCurrentItem(state.videoListItems)
});

const mapDispatchToProps = dispatch => ({
  toggleListItem: id => dispatch(toggleListItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

import { connect } from 'react-redux'
import { toggleListItem, visibilityFilters} from '../actions'
import VideoList from '../components/VideoList'

const getVisibleVideoListItems = (videoListItems, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return videoListItems;
    case visibilityFilters.SELECTED:
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

let currentItem;

const getCurrentItem = (videoListItems) => {
  videoListItems.map(itemList => {
    if(itemList.selected) {
      currentItem = {
        currentName: itemList.name,
        currentUrl: itemList.url
      }
    }
  });
  console.log(currentItem)
};

const mapStateToProps = state => ({
  videoListItems: getVisibleVideoListItems(state.videoListItems, state.visibilityFilter),
  currentItem: getCurrentItem(state.videoListItems)
});

const mapDispatchToProps = dispatch => ({
  toggleListItem: id => dispatch(toggleListItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList)

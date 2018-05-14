import { connect } from 'react-redux'
import { toggleListItem } from '../actions'
import VideoList from '../components/VideoList'
import { visibilityFilters } from '../actions'

const getVisibleVideoListItems = (videoListItems, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return videoListItems;
    case visibilityFilters.SELECTED:
      return videoListItems.filter(t => t.selected);
    case visibilityFilters.UNSELECTED:
      return console.log('tu Cię mam');
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  videoListItems: getVisibleVideoListItems(state.videoListItems, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleListItem: id => dispatch(toggleListItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList)

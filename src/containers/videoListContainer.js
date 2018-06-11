import { connect } from 'react-redux'
import { toggleListItem, getCurrentItem } from '../actions/videoListActions'
import VideoList from '../components/favourites/videoList'


const mapStateToProps = state => ({
  videoListItems: state.videoListItems
});

const mapDispatchToProps = dispatch => ({
  toggleListItem: id => dispatch(toggleListItem(id)),
  getCurrentItem: (id, name, url) => dispatch(getCurrentItem(id, name, url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList)

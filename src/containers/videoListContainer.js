import { connect } from 'react-redux'
import { toggleListItem, getCurrentItem } from '../actions'
import VideoList from '../components/videoList'


const mapStateToProps = state => ({
  currentVideo: state.currentVideo,
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

import { connect } from 'react-redux'
import { toggleListItem, currentItem } from '../actions'
import VideoList from '../components/VideoList'


const mapStateToProps = state => ({

  videoListItems: state.videoListItems
});

const mapDispatchToProps = dispatch => ({
  toggleListItem: id => dispatch(toggleListItem(id)),
  currentItem: (name, url) => dispatch(currentItem(name,url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList)

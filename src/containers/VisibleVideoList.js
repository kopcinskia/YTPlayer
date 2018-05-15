import { connect } from 'react-redux'
import { toggleListItem} from '../actions'
import VideoList from '../components/VideoList'

const mapStateToProps = state => ({
  videoListItems: state.videoListItems
});

const mapDispatchToProps = dispatch => ({
  toggleListItem: id => dispatch(toggleListItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList)

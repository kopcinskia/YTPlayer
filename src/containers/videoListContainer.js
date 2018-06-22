import { connect } from 'react-redux'
import { toggleListItem, getCurrentItem, addListItem } from '../actions/videoListActions'
import VideoList from '../components/favourites/videoList'


const mapStateToProps = state => ({
  videoListItems: state.favourites.videoListItems

});

const mapDispatchToProps = dispatch => ({
  toggleListItem: id => dispatch(toggleListItem(id)),
  getCurrentItem: (id, title, link) => dispatch(getCurrentItem(id, title, link)),
  addListItem: (title, link) => dispatch(addListItem(title, link)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList)

import { connect } from 'react-redux'
import { toggleListItem, getCurrentItem, deleteFromFavourite } from '../actions/videoListActions'
import VideoList from '../components/favourites/videoList'


const mapStateToProps = state => ({
  videoListItems: state.videoListItems

});

const mapDispatchToProps = dispatch => ({
  toggleListItem: id => dispatch(toggleListItem(id)),
  getCurrentItem: (id, title, link) => dispatch(getCurrentItem(id, title, link)),
  deleteFromFavourite: id => dispatch(deleteFromFavourite(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList)

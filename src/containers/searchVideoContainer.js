import { connect } from 'react-redux'
import { createSearchingList } from '../actions/searchActions'
import SearchVideos from '../components/search/searchVideos'
import {getCurrentItem, toggleListItem, addToFavourite} from "../actions/videoListActions";

const mapStateToProps = state => ({
  searchingList: state.searchingList,
});

const mapDispatchToProps = dispatch => ({
  createSearchingList: result => dispatch(createSearchingList(result)),
  toggleListItem: id => dispatch(toggleListItem(id)),
  getCurrentItem: (id, title, link) => dispatch(getCurrentItem(id, title, link)),
  addToFavourite: (id, title, link, thumbnails, description) => dispatch(addToFavourite(id, title, link, thumbnails, description) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchVideos)

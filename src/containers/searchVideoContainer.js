import React from 'react'
import { connect } from 'react-redux'
import { createSearchingList } from '../actions/searchActions'
import SearchVideos from '../components/search/searchVideos'
import {getCurrentItem, toggleListItem} from "../actions/videoListActions";


const mapStateToProps = state => ({
  searchingList: state.searchingList,
});

const mapDispatchToProps = dispatch => ({
  createSearchingList: result => dispatch(createSearchingList(result)),
    toggleListItem: id => dispatch(toggleListItem(id)),
    getCurrentItem: (id, title, link) => dispatch(getCurrentItem(id, title, link)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchVideos)

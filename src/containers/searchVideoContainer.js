import React from 'react'
import { connect } from 'react-redux'
import { createSearchingList } from '../actions/searchActions'
import SearchVideos from '../components/search/searchVideos'

const mapStateToProps = state => ({
  searchingList: state.searchingList,
});

const mapDispatchToProps = dispatch => ({
  createSearchingList: result => dispatch(createSearchingList(result)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchVideos)

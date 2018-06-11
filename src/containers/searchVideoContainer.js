import React from 'react'
import { connect } from 'react-redux'
import { getSearchedObject, createSearchingList } from '../actions/searchActions'
import SearchVideos from '../components/searchVideos'


const mapStateToProps = state => ({
  searchedObject: state.searchVideos,
  searchingList: state.searchingList,
});

const mapDispatchToProps = dispatch => ({
  getSearchedObject: search => dispatch(getSearchedObject(search)),
  createSearchingList: result => dispatch(createSearchingList(result)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchVideos)

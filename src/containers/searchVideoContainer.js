import React from 'react'
import { connect } from 'react-redux'
import { getSearchedObject } from '../actions/videoListActions'
import SearchVideos from '../components/searchVideos'


const mapStateToProps = state => ({
  searchedObject: state.searchVideos,
});

const mapDispatchToProps = dispatch => ({
  getSearchedObject: search => dispatch(getSearchedObject(search)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchVideos)

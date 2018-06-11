import React from 'react'
import { connect } from 'react-redux'
import { searchVideos } from '../actions/videoListActions'
import SearchVideos from '../components/searchVideos'


const mapStateToProps = state => ({
  searchVideoItem: state.searchVideos,
});

const mapDispatchToProps = dispatch => ({
  searchVideos: search => dispatch(searchVideos(search)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchVideos)

import { connect } from 'react-redux'
import Player from '../components/player'

const mapStateToProps = state => ({
  currentVideo: state.favourites.currentVideo
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
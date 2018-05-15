import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

// const Player = ({ currentItem, name, url }) => (
//   <ul>
//     <li>{console.log('sdasd', currentItem)}</li>
//     <li>{name}</li>
//     <li>
//       <ReactPlayer
//         url={url}
//         controls
//       />
//     </li>
//   </ul>
// );
//
// Player.propTypes = {
//   name: PropTypes.string,
//   url: PropTypes.string,
//   currentItem: PropTypes.objectOf(PropTypes.shape({
//     currentName: PropTypes.string,
//     currentUrl: PropTypes.string
//   }))
// };

const Player = ({name, url}) => (
      <ul>
        <li>{name}</li>
        <li>
          <ReactPlayer
          url={url}
          controls
          />
        </li>
      </ul>
    );

Player.defaultProps = {
  name: 'Default',
  url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
};

Player.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Player;
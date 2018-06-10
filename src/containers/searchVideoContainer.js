import React from 'react'
import { connect } from 'react-redux'
import { searchVideos } from '../actions/videoListActions'

const SearchVideos = ({ dispatch }) => {
  let search;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (search.value.trim())  {
          dispatch(searchVideos(search.value));
        } else {

            //TODO ulepsz walidację

            alert('Wpisz poprawne dane w formularzu SEARCH!!!!')
        }
      }}>
        <input ref={node => search = node} />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  )
};

export default connect()(SearchVideos)

import React from 'react'
import { connect } from 'react-redux'
import { addListItem } from '../actions/videoListActions'

//TODO Lepsza walicacja

const AddListItem = ({ dispatch }) => {
  let name;
  let url;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        //walidacja
        if (!name.value.trim() || !url.value.trim()) {
          return
        }
        dispatch(addListItem(name.value, url.value));
        name.value = '';
        url.value = '';
      }}>
        <input ref={node => name = node} />
        <input ref={node => url = node} />
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  )
};

export default connect()(AddListItem)

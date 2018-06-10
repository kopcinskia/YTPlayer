import React from 'react'
import { connect } from 'react-redux'
import { addListItem } from '../actions/videoListActions'

const AddListItem = ({ dispatch }) => {
  let name;
  let url;
  const regYtLink = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/(watch\?v=).+/;

  //TODO ulepsz walidację

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (name.value.trim() && regYtLink.test(url.value))  {
          dispatch(addListItem(name.value, url.value));
        } else {

          //TODO ulepsz walidację

          alert('Wpisz poprawne dane w formularzu ADD ITEM!!!!')
        }
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

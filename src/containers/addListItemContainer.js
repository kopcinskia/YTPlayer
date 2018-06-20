import React from 'react'
import { connect } from 'react-redux'
import { addListItem } from '../actions/videoListActions'

const AddListItem = ({ dispatch }) => {
  let title;
  let link;
  const regYtLink = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/(watch\?v=).+/;

  //TODO ulepsz walidację

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (title.value.trim() && regYtLink.test(link.value))  {
          dispatch(addListItem(title.value, link.value));
        } else {

          //TODO ulepsz walidację

          alert('Wpisz poprawne dane w formularzu ADD ITEM!!!!')
        }
        title.value = '';
        link.value = '';
      }}>
        <input ref={node => title = node} />
        <input ref={node => link = node} />
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  )
};

export default connect()(AddListItem)

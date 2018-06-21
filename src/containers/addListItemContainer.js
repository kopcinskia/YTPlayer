import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Button} from 'react-bootstrap'

import { addListItem } from '../actions/videoListActions'
import InputForms from '../components/inputForms'

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
        <Grid>
          <Row>
            <Col sm= {12}  md={6}>
              <InputForms inputRef={node => title = node}
                          id='titleInput'
                          helper='Please enter name of media'
                          placeholder='Enter name'
                          label='Title: '
                          type='text'
              />
            </Col>
            <Col sm= {12} md={6}>
              <InputForms inputRef={node => link = node}
                          id='linkInput'
                          helper='link example: https://www.youtube.com/watch?v=Zg7VCZe9BTI'
                          placeholder='Paste YT link'
                          label='YT link: '
                          type='text'
              />
            </Col>
          </Row>
          <Row>
            <Col xsOffset={5} xs={2}>
              <Button type="submit">
                Add Item
              </Button>
            </Col>
          </Row>
        </Grid>
      </form>
    </div>
  )
};

export default connect()(AddListItem)

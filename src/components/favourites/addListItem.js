import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col, Button} from 'react-bootstrap'

import InputForms from '../defaults/inputForms'

class AddListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      link: '',
      regYtLink: /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/(watch\?v=).+/,
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  //TODO walidacja nie działa
  getValidationState(a) {
    const length = a.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.title.value.trim() && this.state.regYtLink.test(this.state.link.value)) {
      this.props.addListItem(this.state.title.value, this.state.link.value)

    } else {

      //TODO korzystarz z REfa i State jednoscześnie zmień to

      alert('Wpisz poprawne dane w formularzu ADD ITEM!!!!')
    }
    this.setState()
    {
      this.state.title.value = '';
      this.state.link.value = '';
    }
  }
  //ToDO Ustrukturyzuj buttonki i
  render() {
    return (
      <div>
        {console.log(this.getValidationState(this.state.title), 'AAAAAAAAAAAAAAAa')}
        <form onSubmit={this.onSubmit}>
          <Grid>
            <Row>
              <Col sm={12} md={6}>
                <InputForms
                  inputRef={node => this.state.title = node}
                  getValidationState={this.getValidationState}
                  id='titleInput'
                  helper='Please enter name of media'
                  placeholder='Enter name'
                  label='Title: '
                  type='text'
                />
              </Col>
              <Col sm={12} md={6}>
                <InputForms
                  inputRef={node => this.state.link = node}
                  getValidationState={this.getValidationState}
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
    );
  }
}


AddListItem.propTypes = {
  addListItem: PropTypes.func,
};

export default AddListItem;

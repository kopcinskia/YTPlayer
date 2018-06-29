import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import { Grid, Row, Col, Button} from 'react-bootstrap'

import InputForms from '../defaults/inputForms'
import inputValidate from '../../validations/addValidator'

class AddListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorsMessages: {},
      title: '',
      link: '',
      regYtLink: /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/(watch\?v=).+/,
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.getValidation = this.getValidation.bind(this);
  }

  getValidation(e) {
    const errorsMessages = inputValidate(this.state, e)
    this.setState({errorsMessages})

    console.log(this.state.errorsMessages, 'valid')
  }

  //TODO po blurze wliduje sie każdy element(Średniawka)

  //TODO po dodaniu parametru e po blurze zostaje wykonany jedynie ta walidacja jakiej dotyczy blur

  onBlur(e){
    this.getValidation(e.target.id)
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit() {

    if (isEmpty(this.state.errorsMessages)) {
      console.log(this.state.errorsMessages, 'w ifie')
      this.props.addListItem(this.state.title, this.state.link)
    }else {
      console.log(this.state.errorsMessages, 'w else')


    }
    this.setState({title: '', link: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Grid>
            <Row>
              <Col sm={12} md={6}>
                <InputForms
                  validationProp={this.state.errorsMessages.title}
                  onChange={this.onChange}
                  id='title'
                  helper='Please enter name of media'
                  placeholder='Enter name'
                  label='Title: '
                  type='text'
                  onBlur={this.onBlur}
                />
              </Col>
              <Col sm={12} md={6}>
                <InputForms
                  validationProp={this.state.errorsMessages.link}
                  onChange={this.onChange}
                  id='link'
                  helper='link example: https://www.youtube.com/watch?v=Zg7VCZe9BTI'
                  placeholder='Paste YT link'
                  label='YT link: '
                  type='text'
                  onBlur={this.onBlur}
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

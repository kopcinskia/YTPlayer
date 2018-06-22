import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col, Button} from 'react-bootstrap'

import InputForms from '../defaults/inputForms'

class AddListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validation: null,
      title: '',
      link: '',
      regYtLink: /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/(watch\?v=).+/,
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  //TODO dzieła zrobić cos tego typu pomyśl czy każdy id nie powinien mieć swojego stanu walidacji
  getValidationState(a) {
    const length = a.length;
    if (length > 5) {
      this.setState({validation: null})
    } else if (length > 3) {
      this.setState({validation: 'warning'})
    } else if (length > 0) {
      this.setState({validation: 'error'})
    }
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value })
    //TODO wywalić z onChenga zrobin na blurze
    this.getValidationState(e.target.value)
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.title.trim() && this.state.regYtLink.test(this.state.link)) {
      this.props.addListItem(this.state.title, this.state.link)

    } else {

      alert('Wpisz poprawne dane w formularzu ADD ITEM!!!!')
    }
    this.setState()
    {
      this.state.title = '';
      this.state.link = '';
    }
  }
  //ToDO Ustrukturyzuj buttonki i
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Grid>
            <Row>
              <Col sm={12} md={6}>
                <InputForms
                  validationProp={this.state.validation}
                  onChange={this.onChange}
                  id='title'
                  helper='Please enter name of media'
                  placeholder='Enter name'
                  label='Title: '
                  type='text'
                />
              </Col>
              <Col sm={12} md={6}>
                <InputForms
                  validationProp={this.state.validation}
                  onChange={this.onChange}
                  id='link'
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

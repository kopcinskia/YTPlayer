import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col, Button} from 'react-bootstrap'

import InputForms from '../defaults/inputForms'

class AddListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valTitle: null,
      valLink: null,
      title: '',
      link: '',
      regYtLink: /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/(watch\?v=).+/,
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  //TODO ta walidacja działa znajdź cikawsze warunki i wyrzuć z tego pliku
  getValidationState(id, a) {
    const length = a.length;
    switch (id) {
      case 'title':
        if (length > 5) {
          this.setState({valTitle: null})
        } else if (length > 3) {
          this.setState({valTitle: 'warning'})
        } else if (length > 0) {
          this.setState({valTitle: 'error'})
        }
        break;
      case 'link':
        if (length > 5) {
          this.setState({valLink: null})
        } else if (length > 3) {
          this.setState({valLink: 'warning'})
        } else if (length > 0) {
          this.setState({valLink: 'error'})
        }
        break;
    }
  }

  onBlur(e) {
    this.getValidationState(e.target.id, e.target.value)
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit() {
    if (this.state.title.trim() && this.state.regYtLink.test(this.state.link)) {
      this.props.addListItem(this.state.title, this.state.link)
    }else {
      //TODO walidation Message
      alert('Wpisz poprawne dane w formularzu ADD ITEM!!!!')
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
                  validationProp={this.state.valTitle}
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
                  validationProp={this.state.valLink}
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

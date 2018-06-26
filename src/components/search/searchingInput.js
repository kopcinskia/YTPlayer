import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import search from 'youtube-search'
import validator from 'validator';

import InputForms from '../defaults/inputForms'

//TODO ulepsz walidację
//przykład validacji -> https://github.com/Remchi/reddice/blob/master/client/components/login/LoginForm.js
//validacja i wyswietlanie komunikatów powinno odbywać się poziom niżej poprzez funkcję która zostanie przekazana w propsach
//skożystaj z search validatora aby stworzys funkcje i przekacac jej message do dydołania

//można by dodać przycisk do kasowania zawartości

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {searchInput:''};

    this.opts = {
      maxResults: 20,
      key: 'AIzaSyCNSPr_DNFZasLvR_ygqeieKYwlbuh5GCw'
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ searchInput: e.target.value })
  }

  //TODO walidacja zaczęta w addListItem
  onSubmit(e){
    e.preventDefault()

    if (!validator.isEmpty(this.state.searchInput)) {
      const searchingAction = this.props.createSearchingList
      search(this.state.searchInput, this.opts, function (err, results) {
        if (err) return console.error(err, 'Search list ERR!!');
        searchingAction(results)
      })
    } else {
      alert('Wpisz poprawne dane w formularzu SEARCH!!!!')
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Grid>
          <Row>
            <Col sm={12} md={8}>
              <InputForms
                onChange={this.onChange}
                id='searchInput'
                helper='Search on YT'
                placeholder='Enter text'
                label='Search Video: '
                type='text'
              />
            </Col>
            <Col xs={2} xsOffset={5}>
              <Button bsSize='large' type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Grid>
      </form>
    )
  }
};

SearchInput.propTypes = {
  createSearchingList: PropTypes.func,
};

export default SearchInput;

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import search from 'youtube-search'
import validator from 'validator';
import { createSearchingList } from '../../actions/searchActions'

import InputForms from '../defaults/inputForms'

//TODO ulepsz walidację
//przykład validacji -> https://github.com/Remchi/reddice/blob/master/client/components/login/LoginForm.js
//validacja i wyswietlanie komunikatów powinno odbywać się poziom niżej poprzez funkcję która zostanie przekazana w propsach
//skożystaj z search validatora aby stworzys funkcje i przekacac jej message do dydołania

class SearchVideosInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    };

    this.opts =  {
      maxResults: 20,
      key: 'AIzaSyCNSPr_DNFZasLvR_ygqeieKYwlbuh5GCw'
    };
  }

  ////TODO Popraw to toeż nie działa !!!!!!!!!!!!

  onChange(e) {
    this.setState({ [e.searchInput]: e.target.value })
  }

  //TODO popraw!
  onSubmit(e){
    e.preventDefault();

    if (!validator.isEmpty(this.state.searchInput)) {
      search(this.state.searchInput, this.opts, function (err, results) {

        if (err) return console.error(err, 'Search list ERR!!');
        createSearchingList(results);
      })
    } else {

      alert('Wpisz poprawne dane w formularzu SEARCH!!!!')
    }
    //TODO To nie diała !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.setState({ searchInput: '' })
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

SearchVideosInput.propTypes = {
  createSearchingList: PropTypes.func,
};

export default SearchVideosInput;

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import search from 'youtube-search'
import validator from 'validator';

import InputForms from '../defaults/inputForms'

const opts =  {
  maxResults: 20,
  key: 'AIzaSyCNSPr_DNFZasLvR_ygqeieKYwlbuh5GCw'
};

let searchInput;

//TODO ulepsz walidację
//przykład validacji -> https://github.com/Remchi/reddice/blob/master/client/components/login/LoginForm.js
//validacja i wyswietlanie komunikatów powinno odbywać się poziom niżej poprzez funkcję która zostanie przekazana w propsach
//skożystaj z search validatora aby stworzys funkcje i przekacac jej message do dydołania

const SearchVideosInput = ({ createSearchingList }) => {


  return (
    <form onSubmit={e => {
      e.preventDefault();




      //// Popraw
      if (!validator.isEmpty(searchInput.value) )  {
        search(searchInput.value, opts, function (err, results) {

          if (err) return console.error(err, 'Search list ERR!!');
          createSearchingList(results);
        })
      } else {

        alert('Wpisz poprawne dane w formularzu SEARCH!!!!')
      }
      searchInput.value = '';
    }}>
        <Grid>
          <Row>
            <Col sm={12} md={8} >
              <InputForms
                inputRef={ node => searchInput = node }
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
};

SearchVideosInput.propTypes = {
  createSearchingList: PropTypes.func,
};

export default SearchVideosInput;

import React from 'react'
import PropTypes from 'prop-types'
import Form from '../forms'
import { Button, Grid, Row, Col } from 'react-bootstrap'

const search = require('youtube-search');
const opts =  {
  maxResults: 20,
  key: 'AIzaSyCNSPr_DNFZasLvR_ygqeieKYwlbuh5GCw'
};

const SearchVideosInput = ({ createSearchingList }) => {
  let searchInput;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (searchInput.value.trim())  {

        search(searchInput.value, opts, function (err, results) {

          if (err) return console.error(err, 'Search list ERR!!');
          createSearchingList(results);
        })
      } else {

        //TODO ulepsz walidację
        //przykład validacji -> https://github.com/Remchi/reddice/blob/master/client/components/login/LoginForm.js

        alert('Wpisz poprawne dane w formularzu SEARCH!!!!')
      }
      searchInput.value = '';
    }}>
        <Grid>
          <Row>
            <Col sm={12} md={10} >
              <Form
                inputRef={ node => searchInput = node }
                id='aaa'
                helper='Search on YT'
                placeholder='Enter text'
                label='Search Video: '
                type='text'
              />
            </Col>
            <Col sm={12} md={2}>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// import './App.css';
import PropTypes from 'prop-types'

import { pickRandomCrawl } from '../../actions';
import { makeFetch } from '../../api/api';
import Header from '../Header/Header';
import Quote from '../Quote/Quote';
import Control from '../Control/Control';
import CardBox from '../CardBox/CardBox';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    };
  }

  componentDidMount = async () => {
    const url = 'https://swapi.co/api/films/';
    try {
      const films = await makeFetch(url);
      await this.props.pickRandomCrawl(films.results)
    } catch(error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { quote, title, date } = this.props.quote;
    const quoteContent = { quote, title, date }
    return (
      <div className='App'>
        <Header />
        <Quote {...quoteContent}/>
        <Control />
        {
          <Route exact path='/' render={() => {
            return <CardBox id='home' />
            }}  />
        }
        {
          <Route exact path='/favorites' render={() => {
            return <CardBox id='favorites' />
            }}  />
        }
        {
          <Route exact path='/people' render={() => {
            return <CardBox id='people' />
            }}  />
        }
        {
          <Route exact path='/planets' render={() => {
            return <CardBox id='planets' />
            }}  />
        }
        {
          <Route exact path='/vehicles' render={() => {
            return <CardBox id='vehicles' />
            }}  />
        }

      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  quote: state.quote
})

export const mapDispatchToProps = (dispatch) => ({
  pickRandomCrawl: (films) => dispatch(pickRandomCrawl(films))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

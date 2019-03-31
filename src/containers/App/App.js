import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { constructPeople, constructPlanets, constructVehicles } from '../../api/helpers';
import { pickRandomCrawl, setPeople, setPlanets, setVehicles } from '../../actions';
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
    this.fetchQuote();
    this.fetchPeople();
    this.fetchPlanets();
    this.fetchVehicles();
  }

  fetchQuote = async () => {
    const filmUrl = 'https://swapi.co/api/films/';
    try {
      const films = await makeFetch(filmUrl);
      await this.props.pickRandomCrawl(films.results)
    } catch(error) {
      this.setState({ error: error.message });
    }
  }

  fetchPeople = async () => {
    const peopleUrl = 'https://swapi.co/api/people'
    try {
      const peopleData = await makeFetch(peopleUrl)
      const people =  await constructPeople(peopleData);
      await this.props.setPeople(people)
    } catch(error) {
      this.setState({ error: error.message });
    }
  }

  fetchPlanets = async () => {
    const planetsUrl = 'https://swapi.co/api/planets'
    try {
      const planetData = await makeFetch(planetsUrl)
      const planets =  await constructPlanets(planetData);
      await this.props.setPlanets(planets)
    } catch(error) {
      this.setState({ error: error.message });
    }
  }

  fetchVehicles = async () => {
    const vehiclesUrl = 'https://swapi.co/api/vehicles'
    try {
      const vehicleData = await makeFetch(vehiclesUrl)
      const vehicles =  await constructVehicles(vehicleData);
      await this.props.setVehicles(vehicles)
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
        {this.state.error && this.state.error}
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
  pickRandomCrawl: (films) => dispatch(pickRandomCrawl(films)),
  setPeople: (people) => dispatch(setPeople(people)),
  setPlanets: (planets) => dispatch(setPlanets(planets)),
  setVehicles: (vehicles) => dispatch(setVehicles(vehicles))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

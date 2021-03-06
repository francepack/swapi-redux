import React, { Component } from 'react'
import { connect } from 'react-redux';
import Card from '../Card/Card'
import PropTypes from 'prop-types'



export class CardBox extends Component {
  // const cards = props.data.map(item => (<Card key={item.name} toggleFav={props.toggleFav} {...item} />))
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    const { id } = this.props;
    switch (id) {
      case 'home':
        return (<p className='display-text'>Select Above to View</p>)
      
      case 'favorites':
        return

      case 'people':
        return( 
          <div className='card-box'>
            {this.props.people.map(person => ( <Card {...person} /> ))}
          </div>)
      
      case 'planets':
        return( 
          <div className='card-box'>
            {this.props.planets.map(planet => ( <Card {...planet} /> ))}
          </div>)
      
      case 'vehicles':
        return( 
          <div className='card-box'>
            {this.props.vehicles.map(vehicle => ( <Card {...vehicle} /> ))}
          </div>)
      
      default:
        return (<p className='display-text'>Select Above to View</p>)
    }
  }
}

export const mapStateToProps = (state) => ({
  people: state.people,
  planets: state.planets,
  vehicles: state.vehicles
})

CardBox.propTypes = {
  id: PropTypes.string.isRequired,
  people: PropTypes.array,
  planets: PropTypes.array,
  vehicles: PropTypes.array
}


export default connect(mapStateToProps, null)(CardBox);
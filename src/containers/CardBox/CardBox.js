import React from 'react'
import Card from '../Card/Card'
import PropTypes from 'prop-types'



const CardBox = (props) => {
  // const cards = props.data.map(item => (<Card key={item.name} toggleFav={props.toggleFav} {...item} />))
  const { id } = props;

  switch (id) {
    case 'home':
      return (
        <p className='display-text'>Select Above to View</p>
      )
    case 'favorites':
    case 'people':
    case 'planets':
    case 'vehicles':
    default:
      return (
        <p className='display-text'>Select Above to View</p>
      )
  }
  
}

// CardContainer.propTypes = {
//   data: PropTypes.array.isRequired,
//   toggleFav: PropTypes.func.isRequired
// }


export default CardBox;
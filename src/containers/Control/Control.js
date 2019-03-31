import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Control = (props) => {
  // const { getPeople, getPlanets, getVehicles } = props
  return(
    <div className='btn-container'>
      <Link to='/people' className='people-direct'>
        <button >People</button>
      </Link>
      <Link to='/planets' className='planets-direct'>
        <button >Planets</button>
      </Link>
      <Link to='/vehicles' className='vehicles-direct'>
        <button >Vehicles</button>
      </Link>
    </div>
  )
}

// Control.propTypes = {
//   getPeople: PropTypes.func.isRequired,
//   getPlanets: PropTypes.func.isRequired,
//   getVehicles: PropTypes.func.isRequired
// }

export default Control
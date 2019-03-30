import React from 'react'
import PropTypes from 'prop-types'

const Control = (props) => {
  // const { getPeople, getPlanets, getVehicles } = props
  return(
    <div className='btn-container'>
      <button >People</button>
      <button >Planets</button>
      <button >Vehicles</button>
    </div>
  )
}

// Control.propTypes = {
//   getPeople: PropTypes.func.isRequired,
//   getPlanets: PropTypes.func.isRequired,
//   getVehicles: PropTypes.func.isRequired
// }

export default Control
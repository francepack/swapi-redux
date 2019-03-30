import React from 'react'
import PropTypes from 'prop-types'

const Header = () => {

  return(
    <header>
      <h1><span>SWAPI</span> - box</h1>
      <button className='display-fav'>View <span>0</span> Favorites </button>
    </header>
  )
}

// Header.propTypes = {
//   viewFavorites: PropTypes.func.isRequired,
//   favCount: PropTypes.number.isRequired
// }
export default Header
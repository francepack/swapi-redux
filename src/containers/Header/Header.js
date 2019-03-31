import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = () => {

  return(
    <header>
      <Link to='/' className='home-direct'>
        <h1><span>SWAPI</span> - box</h1>
      </Link>
      <button className='display-fav'>View <span>0</span> Favorites </button>
    </header>
  )
}

// Header.propTypes = {
//   viewFavorites: PropTypes.func.isRequired,
//   favCount: PropTypes.number.isRequired
// }
export default Header
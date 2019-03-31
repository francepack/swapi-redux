import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Header = () => {

  return(
    <header>
      <Link to='/' className='home-direct'>
        <h1><span>SWAPI</span> - box</h1>
      </Link>
      {/* <Link to='/favorites' className='favorites-direct'> */}
        <button className='display-fav'>View <span>0</span> Favorites </button>
      {/* </Link> */}
    </header>
  )
}

// Header.propTypes = {
//   viewFavorites: PropTypes.func.isRequired,
//   favCount: PropTypes.number.isRequired
// }
export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Control = (props) => {
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

export default Control
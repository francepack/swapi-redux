import React from 'react'
import PropTypes from 'prop-types'

const Quote = (props) => {
  return(
    <div className='quote-box'>
      <div className='crawl'>
        <p className='quote-movie'>{props.title}</p>
        <p className='quote-year'>{props.date}</p>
        <p className='quote'>{props.quote}</p>
      </div>
    </div>  
  )
}

Quote.propTypes = {
  quoteContent: PropTypes.object
}

export default Quote
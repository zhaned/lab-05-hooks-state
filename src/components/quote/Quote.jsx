import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ name, quote, image }) => ( 
  <div>
    <h3>{name}</h3>
    <img src={image} alt={name} height='250px'/>
    <p>{quote}</p>
  </div>
);

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
}

export default Quote;

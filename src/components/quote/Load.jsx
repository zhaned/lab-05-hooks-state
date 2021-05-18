import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
  <div>
    <h2>Get a Random Simpsons Quote</h2>
    <button onClick={onClick}>Load</button>
  </div>
);

Load.propTypes ={
  onClick: PropTypes.func.isRequired,
};

export default Load;

import React from 'react';

import './search-box.styles.css';

// No need to access state
// No need to access lifectycle methods
// -> use functional component

// Functionality is brought in through callbacks
export const SearchBox = ({ placeholder, handleChange }) => {
  return <input
    className='search'
    type='search'
    placeholder={ placeholder }
    onChange={ handleChange } />
}
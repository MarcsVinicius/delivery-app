import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [savedProducts, setSavedProducts] = useState([]);

  const value = useMemo(() => ({
    savedProducts,
    setSavedProducts,
  }), [savedProducts]);

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;

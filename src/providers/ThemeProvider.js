import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeProvider = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
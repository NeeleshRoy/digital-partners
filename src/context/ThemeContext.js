import React from 'react';
import dummy from '../dummy.json'

export const ThemeContext = React.createContext({
  brand: 'a',
  ...dummy
});

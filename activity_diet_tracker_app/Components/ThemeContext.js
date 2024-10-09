import React, { createContext, useState } from 'react';
import Colors from '../Utils/Colors';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isPinkTheme, setIsPinkTheme] = useState(false);

  const toggleTheme = () => {
    setIsPinkTheme((prevTheme) => !prevTheme);
  };

  const theme = {
    backgroundColor: isPinkTheme ? Colors.background : Colors.toggleThemeBackground,
    textColor: isPinkTheme ? Colors.primary: Colors.toggleThemeHeader,
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
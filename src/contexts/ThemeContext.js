import React, { createContext } from 'react'
const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
  )
}

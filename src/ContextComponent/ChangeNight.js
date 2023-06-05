import React, { useState, createContext } from 'react'

export const NightModeContext = createContext()

export const NightModeProvider = ({ children }) => {
      const [isNightMode, setIsNightMode] = useState(false)
      return (
            <NightModeContext.Provider value={{ isNightMode, setIsNightMode }}>
                  {children}
            </NightModeContext.Provider>
      )
}
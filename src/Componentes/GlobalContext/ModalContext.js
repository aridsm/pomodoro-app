import React from 'react'

export const GlobalModalContext = React.createContext()

export const ModalContext = ({ children }) => {

  const [isRulesOpen, setIsRulesOpen] = React.useState(false)
  const [isConfigsOpen, setIsConfigsOpen] = React.useState(true)
  const [isSpeedOpen, setIsSpeedOpen] = React.useState(false)

  return (
    <GlobalModalContext.Provider value={{ isRulesOpen, setIsRulesOpen, isConfigsOpen, setIsConfigsOpen, isSpeedOpen, setIsSpeedOpen }}>
      {children}
    </GlobalModalContext.Provider>
  )
}
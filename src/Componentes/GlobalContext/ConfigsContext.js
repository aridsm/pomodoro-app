import React from 'react'

export const GlobalConfigsContext = React.createContext()

export const ConfigsContext = ({ children }) => {

  const initialConfigs = {
    atividade: 25,
    pausas: {
      curtas: 5,
      longas: 20
    },
    velocidade: 50,
    toque: 'toque1'
  }

  const [configs, setConfigs] = React.useState(initialConfigs)

  return (
    <GlobalConfigsContext.Provider value={{ configs, setConfigs }}>
      {children}
    </GlobalConfigsContext.Provider>
  )
}
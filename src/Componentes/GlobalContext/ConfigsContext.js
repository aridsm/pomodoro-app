import React from 'react'

export const GlobalConfigsContext = React.createContext()

export const ConfigsContext = ({ children }) => {

  const initialConfigs = {
    tarefas: ['atividade', 'pausas curtas', 'pausas longas'],
    atividade: {
      value: 10,
      maxMinValue: 50,
      min() { return this.maxMinValue * this.value / 100 }
    },
    pausas: {
      curtas: {
        value: 50,
        maxMinValue: 20,
        min() { return this.maxMinValue * this.value / 100 }
      },
      longas: {
        value: 50,
        maxMinValue: 40,
        min() { return this.maxMinValue * this.value / 100 }
      },
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
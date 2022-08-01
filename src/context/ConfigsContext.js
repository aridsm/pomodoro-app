import React, { useReducer } from 'react'

export const ConfigsContext = React.createContext();

const initialState = {
  minutos: {
    atividade: 25,
    pausaCurta: 5,
    pausaLonga: 20
  },
  tarefaAtual: 'atividade',
  contagem: {
    atividade: 0,
    pausaCurta: 0,
    pausaLonga: 0
  },
  volume: 50,
  minAtual: 25
}

const configReducer = (state, action) => {
  if (action.type === 'ACTIVITY') {
    const tarefaAtual = state.tarefaAtual;
    let novaContagem = { ...state.contagem, [tarefaAtual]: state.contagem[tarefaAtual] + 1 }
    let novaTarefa;

    if (tarefaAtual === 'atividade') {
      novaTarefa = 'pausaCurta';
      if (novaContagem.atividade % 4 === 0 && state.contagem.atividade !== 0) {
        novaTarefa = 'pausaLonga'
      }
    } else if (tarefaAtual === 'pausaCurta') {
      novaTarefa = 'atividade';
    } else if (tarefaAtual === 'pausaLonga') {
      novaTarefa = 'atividade'
    }

    let novoMin = state.minutos[novaTarefa]
    return { ...state, tarefaAtual: novaTarefa, contagem: novaContagem, minAtual: novoMin }
  }
  if (action.type === 'MIN') {
    return { ...state, minAtual: action.min }
  }
}

const ConfigsContextProvider = ({ children }) => {

  const [configs, dispatchConfigs] = useReducer(configReducer, initialState);

  const changeActivity = () => {
    dispatchConfigs({ type: 'ACTIVITY' })
  }
  const setMin = (min) => {
    dispatchConfigs({ type: 'MIN', min })
  }
  return (
    <ConfigsContext.Provider value={{ configs, changeActivity, setMin }}>
      {children}
    </ConfigsContext.Provider>
  )
}

export default ConfigsContextProvider
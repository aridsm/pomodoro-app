import React, { useReducer } from 'react'

export const ConfigsContext = React.createContext();

const initialState = {
  segundos: {
    atividade: 160,
    pausaCurta: 60,
    pausaLonga: 70
  },
  tarefaAtual: 'atividade',
  contagem: {
    atividade: 0,
    pausaCurta: 0,
    pausaLonga: 0
  },
  volume: 50
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

    return { ...state, tarefaAtual: novaTarefa, contagem: novaContagem }
  }
  if (action.type === 'UPDATE_CONFIGS') {
    return { ...state, segundos: action.configs }
  }
  if (action.type === 'SET_INITIAL_VALUE') {

    return { ...state, segundos: initialState.segundos, tarefaAtual: initialState.tarefaAtual }
  }
}

const ConfigsContextProvider = ({ children }) => {

  const [configs, dispatchConfigs] = useReducer(configReducer, initialState);

  const changeActivity = () => {
    dispatchConfigs({ type: 'ACTIVITY' })
  }
  const updateConfigs = (configs) => {
    dispatchConfigs({ type: 'UPDATE_CONFIGS', configs })
  }
  const setInitialValue = () => {
    dispatchConfigs({ type: 'SET_INITIAL_VALUE' })
  }
  return (
    <ConfigsContext.Provider value={{ configs, changeActivity, updateConfigs, setInitialValue }}>
      {children}
    </ConfigsContext.Provider>
  )
}

export default ConfigsContextProvider
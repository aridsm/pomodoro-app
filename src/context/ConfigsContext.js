import React, { useReducer } from 'react'

export const ConfigsContext = React.createContext();

const initialState = {
  segundos: {
    atividade: 60 * 25, //25 min
    pausaCurta: 60 * 5, //5 min
    pausaLonga: 60 * 20 //20 min
  },
  tarefaAtual: 'atividade',
  contagem: {
    atividade: 0,
    pausaCurta: 0,
    pausaLonga: 0
  },
  volume: 50,
  audio: 'toque-1.wav',
  velocidade: 100 //100% de 1000ms
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
    return { ...state, ...action.newConfigs }
  }
  if (action.type === 'SET_INITIAL_VALUE') {
    return { ...state, segundos: initialState.segundos, volume: initialState.volume }
  }
}

const ConfigsContextProvider = ({ children }) => {

  const [configs, dispatchConfigs] = useReducer(configReducer, initialState);

  const changeActivity = () => {
    dispatchConfigs({ type: 'ACTIVITY' })
  }
  const updateConfigs = (newConfigs) => {
    dispatchConfigs({ type: 'UPDATE_CONFIGS', newConfigs })
  }
  const setInitialValue = () => {
    dispatchConfigs({ type: 'SET_INITIAL_VALUE' })
  }

  return (
    <ConfigsContext.Provider value={{ configs, changeActivity, updateConfigs, setInitialValue, }}>
      {children}
    </ConfigsContext.Provider>
  )
}

export default ConfigsContextProvider
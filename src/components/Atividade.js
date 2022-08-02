import React, { useContext, useEffect, useRef, useState } from 'react'
import { ConfigsContext } from '../context/ConfigsContext'
import classes from './Atividade.module.css'

const Atividade = () => {

  const { configs } = useContext(ConfigsContext)
  const { tarefaAtual } = configs;
  const [tarefa, setTarefa] = useState(tarefaAtual)

  useEffect(() => {
    if (tarefaAtual === 'pausaCurta') {
      setTarefa('pausa curta')
    }
    if (tarefaAtual === 'pausaLonga') {
      setTarefa('pausa longa')
    }
    if (tarefaAtual === 'atividade') {
      setTarefa('atividade')
    }
  }, [tarefaAtual])

  return (
    <div className={classes.ativ}>
      <p className={classes.title}>Tarefa atual</p>
      <p className={classes.tarefa}>{tarefa}</p>
    </div>
  )
}

export default Atividade
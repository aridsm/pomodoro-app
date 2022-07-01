import React from 'react'
import styles from './Styles/Timer.module.css'
import { ReactComponent as PlaySvg } from '../assets/play-circle.svg'
import { ReactComponent as PauseSvg } from '../assets/pause-circle.svg'
import Botao from './Botao'

import { GlobalConfigsContext } from './GlobalContext/ConfigsContext'
const Timer = () => {

  const { configs } = React.useContext(GlobalConfigsContext)
  const [playing, setPlaying] = React.useState(false);
  const [currentTask, setCurrentTask] = React.useState(configs.tarefas[0])
  const [countingTask, setCountingTask] = React.useState({
    atividade: 0,
    ['pausas curtas']: 0,
    ['pausas longas']: 0
  })
  let timer = React.useRef()

  function countTimer() {
    const INTERVAL = 10;
    let currentSeconds = 0;
    let currentMin = configs.atividade.min()
    timer = setInterval(() => {
      currentSeconds -= 1;
      if (currentSeconds < 0) {
        currentSeconds = 59;
        currentMin -= 1;
      }
      if (currentMin == 0 && currentSeconds == 0) {
        clearInterval(timer);

        //atualizar a tarefa
      }
      console.log(currentMin, currentSeconds)
    }, INTERVAL);

  }

  function playTimer() {
    setPlaying(true)
    countTimer()
  }
  function pauseTimer() {
    setPlaying(false)
  }

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timer}>
        <div>
          <p className={styles.horaDe}>é hora de</p>
          <p className={styles.atividade}>Atividade</p>
        </div>
        <time className={styles.timeLeft}>
          {configs.atividade.min()}:00
        </time>
        <button aria-label='Adicionar mais 5 minutos' className={styles.addMin}>+5</button>
      </div>
      {!playing ?
        <button label='Iniciar o cronometro' onClick={playTimer}><PlaySvg /></button>
        :
        <button label='Pausar no cronometro' onClick={pauseTimer}><PauseSvg /></button>
      }

    </div >
  )
}

export default Timer
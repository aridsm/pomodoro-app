import React from 'react'
import styles from './Styles/Timer.module.css'
import { ReactComponent as PlaySvg } from '../assets/play-circle.svg'
import { ReactComponent as PauseSvg } from '../assets/pause-circle.svg'
// import Botao from './Botao'

import { GlobalConfigsContext } from './GlobalContext/ConfigsContext'

const Timer = () => {

  const { configs } = React.useContext(GlobalConfigsContext);
  const [min, setMin] = React.useState(configs.atividade.min())
  const [sec, setSec] = React.useState(0)
  const [playing, setPlaying] = React.useState(false);
  const [currentTask, setCurrentTask] = React.useState(configs.tarefaInicial)
  const [countingTask, setCountingTask] = React.useState({
    atividade: 0,
    pausaCurta: 0,
    pausaLonga: 0
  })
  let timer = React.useRef()

  React.useEffect(() => {
    console.log(countingTask)

    const INTERVAL = 10;
    const playInterval = () => {
      setSec(sec - 1)
      if (sec === 0) {
        setSec(59)
        setMin(min - 1)
      }
      if (min === 0 && sec === 0) {
        clearInterval(timer);
        const currentCounting = countingTask[currentTask] + 1
        setCountingTask({ ...countingTask, [currentTask]: currentCounting })
        if (currentTask === 'atividade' && countingTask['pausaCurta'] === 4) {
          setCurrentTask('pausaLonga')
          setMin(configs.pausas.longas.min())
        } else if (currentTask === 'pausaCurta' || currentTask === 'pausaLonga') {
          setCurrentTask('atividade')
          setMin(configs.atividade.min())
        } else {
          setCurrentTask('pausaCurta')
          setMin(configs.pausas.curtas.min())
        }
      }
    }
    if (playing) {
      timer.current = setInterval(() => playInterval(), INTERVAL);
    }
    return () => {
      clearInterval(timer.current);
    };
  }, [configs.atividade, configs.pausas.curtas, configs.pausas.longas, countingTask, currentTask, min, playing, sec])

  function playTimer() {
    setPlaying(true)

  }
  function pauseTimer() {
    setPlaying(false)

  }

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timer}>
        <div>
          <p className={styles.horaDe}>é hora de</p>
          <p className={styles.atividade}>{currentTask}</p>
        </div>
        <time className={styles.timeLeft}>
          {min}:{sec}
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
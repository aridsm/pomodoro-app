import React from 'react'
import styles from './Styles/Timer.module.css'
import { ReactComponent as PlaySvg } from '../assets/play-circle.svg'
import { ReactComponent as PauseSvg } from '../assets/pause-circle.svg'
import Botao from './Botao'

import { GlobalConfigsContext } from './GlobalContext/ConfigsContext'
const Timer = () => {

  const { configs } = React.useContext(GlobalConfigsContext)
  const [playing, setPlaying] = React.useState(false)

  React.useEffect(() => {
    console.log(configs.pausas.curtas.min())
  }, [])

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
      <Botao Icon={PlaySvg} name='Play' label='Dar play no cronometro' action={setPlaying} />
    </div>
  )
}

export default Timer
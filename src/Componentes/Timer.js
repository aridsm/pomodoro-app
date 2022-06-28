import React from 'react'
import styles from './Styles/Timer.module.css'
import { ReactComponent as PlaySvg } from '../assets/play-circle.svg'
import { ReactComponent as PauseSvg } from '../assets/pause-circle.svg'
import Botao from './Botao'

const Timer = () => {
  return (
    <div className={styles.timerContainer}>
      <div className={styles.timer}>
        <div>
          <p className={styles.horaDe}>é hora de</p>
          <p className={styles.atividade}>Atividade</p>
        </div>
        <time className={styles.timeLeft}>
          25:00
        </time>
        <button aria-label='Adicionar mais 5 minutos'>+5</button>
      </div>
      <Botao Icon={PlaySvg} name='Play' label='Dar play no cronometro' />
    </div>
  )
}

export default Timer
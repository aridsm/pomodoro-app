import React from 'react'
import styles from './Styles/Timer.module.css'

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
      <button aria-label='Dar play no cronometro'>Play</button>
    </div>
  )
}

export default Timer
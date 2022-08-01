import React, { useContext, useEffect, useRef, useState } from 'react'
import { ConfigsContext } from '../context/ConfigsContext';
import classes from './Timer.module.css';
import { ReactComponent as IconPlay } from '../assets/play-fill.svg'
import { ReactComponent as IconPause } from '../assets/pause-fill.svg'

const Timer = () => {
  const { configs, changeActivity, setMin } = useContext(ConfigsContext);
  const [playing, setPlaying] = useState(false);
  const [segundos, setSegundos] = useState(0)
  const cron = useRef();

  const { minAtual } = configs

  useEffect(() => {

    clearInterval(cron.current)
    if (playing) {
      let s = segundos;
      let m = minAtual;

      cron.current = setInterval(() => {
        --s;
        if (s < 0) {
          s = 59;
          --m;
          setMin(m)
        }
        if (m === 0 && s === 0) {
          clearInterval(cron.current);
          changeActivity();
          return;
        }
        setSegundos(s)
      }, 50);
    }

    return () => {
      clearTimeout(cron.current)
    }
  }, [changeActivity, segundos, playing, setMin, minAtual])

  const btnContent = playing ? <p>Pausar <span><IconPause /></span></p> : <p>Iniciar <span><IconPlay /></span></p>;

  const padNumber = (num) => {
    return num.toString().padStart(2, 0)
  }

  return (
    <section className={classes.timerContainer}>
      <h1 className={classes.h1}>Pomodoro App</h1>
      <div className={classes.timer}>
        {padNumber(configs.minAtual)}:{padNumber(segundos)}
      </div>
      <button className={classes.btnPlay} onClick={() => setPlaying(prevState => !prevState)}>{btnContent}</button>
    </section>
  )
}

export default Timer
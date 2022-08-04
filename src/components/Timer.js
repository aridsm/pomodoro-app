import React, { useContext, useEffect, useRef, useState } from 'react'
import { ConfigsContext } from '../context/ConfigsContext';
import classes from './Timer.module.css';
import { ReactComponent as IconPlay } from '../assets/play-fill.svg'
import { ReactComponent as IconPause } from '../assets/pause-fill.svg'

const Timer = () => {
  const { configs, changeActivity } = useContext(ConfigsContext);
  const [playing, setPlaying] = useState(false);
  const [segundos, setSegundos] = useState(0)
  const cron = useRef();

  useEffect(() => {
    setSegundos(configs.segundos[configs.tarefaAtual])
  }, [configs.segundos, configs.tarefaAtual])

  useEffect(() => {
    clearInterval(cron.current)
    if (playing) {
      let s = segundos;
      cron.current = setInterval(() => {
        --s;
        if (s === 0) {
          clearInterval(cron.current);
          changeActivity();
          return;
        }
        setSegundos(s)
      }, 50)
    }

    return () => {
      clearTimeout(cron.current)
    }
  }, [changeActivity, playing, segundos])

  const btnContent = playing ? <p>Pausar <span><IconPause /></span></p> : <p>Iniciar <span><IconPlay /></span></p>;

  const padNumber = (num) => {
    return num.toString().padStart(2, 0)
  }
  const min = padNumber(Math.floor(segundos / 60));
  const sec = padNumber(segundos % 60);

  return (
    <section className={classes.timerContainer}>
      <h1 className={classes.h1}>Pomodoro App</h1>
      <div className={classes.timer}>
        {min}:{sec}
        {/*padNumber(configs.minAtual)}:{padNumber(segundos)*/}
      </div>
      <button className={classes.btnPlay} onClick={() => setPlaying(prevState => !prevState)}>{btnContent}</button>
    </section>
  )
}

export default Timer
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
  const timeout = useRef();
  const audio = useRef();
  const { volume } = configs



  /*erro no volume apenas atualiza quando o timer esta pausado*/



  useEffect(() => {
    setSegundos(configs.segundos[configs.tarefaAtual])
  }, [configs.segundos, configs.tarefaAtual])

  useEffect(() => {
    clearInterval(cron.current)
    if (playing) {
      let s = segundos;
      cron.current = setInterval(() => {
        --s;
        setSegundos(s)
        if (s === 0) {
          setPlaying(false);
          audio.current.play();
          audio.current.loop = true;
          audio.current.volume = volume / 100;
          timeout.current = setTimeout(() => {
            changeActivity();
            setPlaying(true);
            audio.current.pause();
            audio.current.currentTime = 0;
          }, 3000);
          return () => clearTimeout(timeout.current)
        }
      }, 50)
    }

    return () => {
      clearInterval(cron.current)
    }
  }, [changeActivity, playing, segundos, volume])

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
      </div>
      <button className={classes.btnPlay} onClick={() => setPlaying(prevState => !prevState)} disabled={!playing && segundos === 0}>{btnContent}</button>
      <audio src={require(`../assets/${configs.audio}`)} ref={audio}></audio>
    </section>
  )
}

export default Timer
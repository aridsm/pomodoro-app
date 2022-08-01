import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { ConfigsContext } from './context/ConfigsContext';

const Timer = () => {
  const { configs, changeActivity, setMin } = useContext(ConfigsContext);
  const [playing, setPlaying] = useState(false);
  //const [minutagem, setMinutagem] = useState(configs.minutos[configs.tarefaAtual])
  const [segundos, setSegundos] = useState(0)
  const cron = useRef();
  const playTimer = useCallback(() => {
    setPlaying(true)

  }, [])

  useEffect(() => {

    if (playing) {
      let s = segundos;
      let m = configs.minAtual;

      console.log(configs)
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
  }, [changeActivity, configs, playTimer, segundos, playing, setMin])

  function pauseTimer() {
    clearInterval(cron.current)
    setPlaying(false)
  }

  return (
    <section>
      <h1>Pomodoro App</h1>
      <div>
        {configs.minAtual}:{segundos}
      </div>
      <button onClick={playTimer}>Iniciar</button>
      <button onClick={pauseTimer}>Pausar</button>
    </section>
  )
}

export default Timer
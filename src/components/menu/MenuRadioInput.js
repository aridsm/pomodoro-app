import React, { useRef } from 'react'
import classes from './MenuRadioInput.module.css';

const MenuRadioInput = ({ id, value, toqueSelecionado, label, setToqueSelecionado, volume }) => {

  const audio = useRef()
  const timeout = useRef()

  const tocarAudio = () => {
    clearTimeout(timeout.current)
    audio.current.play();
    audio.current.volume = volume / 100;
    timeout.current = setTimeout(() => {
      audio.current.pause();
      audio.current.currentTime = 0;
    }, 2000);
    return () => clearTimeout(timeout.current)
  }

  return (
    <div className={classes.toque}>
      <input type="radio" name="toque" id={id} value={value} checked={toqueSelecionado === value} onChange={({ target }) => setToqueSelecionado(target.value)} />
      <label htmlFor={id} onClick={tocarAudio}>{label}</label>
      <audio src={require(`../../assets/${value}`)} ref={audio}></audio>
    </div>
  )
}

export default MenuRadioInput
import React, { useState } from 'react'
import WrapperItemMenu from '../utilities/WrapperItemMenu';
import classes from './MenuConfigsInput.module.css'

const MenuConfigsInput = ({ value, updateValue, label, id }) => {

  const [min, setMin] = useState(Math.floor(+value / 60));
  const [sec, setSec] = useState(value % 60);

  const changeMinHandler = ({ target }) => {
    setMin(target.value)
    const totalSegundos = target.value * 60 + Number(sec)
    updateValue(totalSegundos)
  }
  const changeSecHandler = ({ target }) => {
    setSec(target.value)
    const totalSegundos = Number(min) * 60 + target.value
    updateValue(totalSegundos)
  }

  return (
    <WrapperItemMenu legend={label}>
      <div className={classes.container}>
        <div className={classes.inputField}>
          <input type='number' min='1' max='59' value={min} onChange={changeMinHandler} id={`${id}-min`} />
          <label htmlFor={id}>Minuto(s)</label>
        </div>
        <div className={classes.inputField}>
          <input type='number' min='0' max='59' value={sec} onChange={changeSecHandler} id={`${id}-sec`} />
          <label htmlFor={id}>Segundo(s)</label>
        </div>
      </div>
    </WrapperItemMenu>
  )
}

export default MenuConfigsInput
import React, { useState } from 'react'
import classes from './MenuConfigsInput.module.css'

const MenuConfigsInput = ({ value, updateValue, legend, id }) => {

  const padNumber = (num) => {
    return num.toString().padStart(2, 0)
  }

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
    <li className={classes.itemForm}>
      <fieldset>
        <legend>{legend}</legend>
        <div className={classes.container}>
          <div className={classes.inputField}>
            <input type='number' min='1' max='59' value={padNumber(min)} onChange={changeMinHandler} id={`${id}-min`} />
            <label htmlFor={id}>Minutos</label>
          </div>
          <div className={classes.inputField}>
            <input type='number' min='0' max='59' value={padNumber(sec)} onChange={changeSecHandler} id={`${id}-sec`} />
            <label htmlFor={id}>Segundos</label>
          </div>
        </div>
      </fieldset>
    </li>
  )
}

export default MenuConfigsInput
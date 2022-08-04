import React from 'react'
import classes from './MenuConfigsInput.module.css'

const MenuConfigsInput = ({ value, onChange, legend, id }) => {

  const padNumber = (num) => {
    return num.toString().padStart(2, 0)
  }
  const min = padNumber(Math.floor(value / 60));
  const sec = padNumber(value % 60);

  return (
    <li>
      <fieldset>
        <legend>{legend}</legend>
        <div className={classes.container}>
          <div className={classes.inputField}>
            <label htmlFor={id}>Minutos</label>
            <input type='number' min='1' max='59' value={min} id={`${id}-min`} onChange={onChange} />
          </div>
          <div className={classes.inputField}>
            <label htmlFor={id}>Segundos</label>
            <input type='number' min='0' max='59' value={sec} id={`${id}-sec`} onChange={onChange} />
          </div>
        </div>
      </fieldset>
    </li>
  )
}

export default MenuConfigsInput
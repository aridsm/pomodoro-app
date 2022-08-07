import React, { useState } from 'react'
import WrapperItemMenu from '../utilities/WrapperItemMenu';
import classes from './MenuConfigsInput.module.css'

const MenuConfigsInput = ({ value, updateValue, label, id, validateInputs }) => {

  const [min, setMin] = useState(Math.floor(+value / 60));
  const [sec, setSec] = useState(value % 60);
  let isMinValid = min <= 59 && min >= 1;
  let isSecValid = sec <= 59 && sec >= 0;

  const changeMinHandler = ({ target }) => {
    setMin(target.value)
    const totalSegundos = target.value * 60 + Number(sec)
    updateValue(totalSegundos);
  }
  const changeSecHandler = ({ target }) => {
    setSec(target.value)
    const totalSegundos = Number(min) * 60 + target.value
    updateValue(totalSegundos)
  }

  const validateInput = () => {
    const areInputsValid = isMinValid && isSecValid
    validateInputs(areInputsValid)
  }

  return (
    <WrapperItemMenu legend={label}>
      <div className={classes.container}>
        <div className={classes.inputField}>
          <input type='number' min='1' max='59' value={min} onChange={changeMinHandler} id={`${id}-min`} onKeyUp={validateInput} className={!isMinValid ? classes.invalid : ''} />
          <label htmlFor={id}>Minuto(s)</label>
        </div>
        <div className={classes.inputField}>
          <input type='number' min='0' max='59' value={sec} onChange={changeSecHandler} id={`${id}-sec`} onKeyUp={validateInput} className={!isSecValid ? classes.invalid : ''} />
          <label htmlFor={id}>Segundo(s)</label>
        </div>
        {!isMinValid && <p className={classes.aviso}>Os minutos devem estar entre 1 e 59.</p>}
        {!isSecValid && <p className={classes.aviso}>Os segundos devem estar entre 0 e 59.</p>}
      </div>
    </WrapperItemMenu>
  )
}

export default MenuConfigsInput
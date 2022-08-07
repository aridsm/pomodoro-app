import React, { useEffect, useState } from 'react'
import WrapperItemMenu from '../utilities/WrapperItemMenu';
import classes from './MenuConfigsInput.module.css'

const MenuConfigsInput = ({ value, updateValue, label, id, validateInputs }) => {

  const [min, setMin] = useState(Math.floor(+value / 60));
  const [sec, setSec] = useState(value % 60);
  let isMinValid = min <= 59 && min >= 0;
  let isSecValid = sec <= 59 && sec >= 0;

  useEffect(() => {
    setMin(Math.floor(+value / 60));
    setSec(value % 60);
  }, [value])


  const changeMinHandler = ({ target }) => {
    setMin(target.value)
    if (target.value === '') {
      setMin(0)
    }
    const totalSegundos = Number(target.value * 60) + Number(sec)
    updateValue(totalSegundos);
  }
  const changeSecHandler = ({ target }) => {
    setSec(target.value)
    if (target.value === '') {
      setSec(0)
    }
    const totalSegundos = Number(min) * 60 + Number(target.value)
    updateValue(totalSegundos)
  }

  const validateInput = (e) => {
    const areInputsValid = isMinValid && isSecValid;
    if (e.target.value) {

    }
    validateInputs(areInputsValid)
  }

  return (
    <WrapperItemMenu legend={label}>
      <div className={classes.container}>
        <div className={classes.inputField}>
          <input type='number' min='1' max='59' value={min} onChange={changeMinHandler} id={`${id}-min`} onBlur={validateInput} className={!isMinValid ? classes.invalid : ''} />
          <label htmlFor={`${id}-min`}>Minuto(s)</label>
        </div>
        <div className={classes.inputField}>
          <input type='number' min='0' max='59' value={sec} onChange={changeSecHandler} id={`${id}-sec`} onBlur={validateInput} className={!isSecValid ? classes.invalid : ''} />
          <label htmlFor={`${id}-sec`}>Segundo(s)</label>
        </div>
        {!isMinValid && <p className={classes.aviso}>O valor dos minutos deve estar entre 0 e 59.</p>}
      </div>
    </WrapperItemMenu>
  )
}

export default MenuConfigsInput
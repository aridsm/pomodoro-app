import React from 'react'
import styles from './Styles/InputRange.module.css'

const InputRange = ({ label, value, step, min, name, valueRange }) => {
  return (
    <li className={styles.itemRange}>
      <label for={name} className={styles.label}>{label}</label>
      <input type='range' name={name} id={name} value={value} step={step} min={min}/>
      <span>{valueRange}</span>
    </li>
  )
}

export default InputRange
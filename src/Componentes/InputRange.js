import React from 'react'

const InputRange = ({ label, value, step, min, name, valueRange }) => {
  return (
    <li>
      <label for={name}>{label}</label>
      <input type='range' name={name} id={name} value={value} step={step} min={min} />
      <span>{valueRange}</span>
    </li>
  )
}

export default InputRange
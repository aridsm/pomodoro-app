import React from 'react'
import WrapperItemMenu from '../utilities/WrapperItemMenu'
import classes from './MenuConfigsRange.module.css'

const MenuConfigsRange = ({ value, setValue, id, legend, min, valueUnit }) => {
  return (
    <WrapperItemMenu legend={legend} className={classes.rangeField}>
      <input type="range" value={value} id={id} onChange={({ target }) => setValue(target.value)} min={min} />
      <p className={classes.value}>{valueUnit}</p>
    </WrapperItemMenu>
  )
}

export default MenuConfigsRange
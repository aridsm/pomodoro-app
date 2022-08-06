import React from 'react'
import classes from './WrapperItemMenu.module.css'

const WrapperItemMenu = ({ children, className, legend }) => {

  const styles = classes.itemForm + ' ' + className
  return (
    <li className={styles}>
      <fieldset>
        <legend>{legend}</legend>
        {children}
      </fieldset>
    </li>
  )
}

export default WrapperItemMenu
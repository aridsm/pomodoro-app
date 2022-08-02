import React from 'react'
import classes from './WrapperMenu.module.css';

const WrapperMenu = ({ children, title }) => {
  return (
    <section className={classes.containerMenu}>
      <p className={classes.title}>{title}</p>
      {children}
    </section>
  )
}

export default WrapperMenu
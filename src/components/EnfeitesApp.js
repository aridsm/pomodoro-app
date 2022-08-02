import React from 'react'
import { ReactComponent as CircEnfeite } from '../assets/circ.svg'
import { ReactComponent as BrilEnfeite } from '../assets/shape1.svg'
import classes from './EnfeitesApp.module.css'

const EnfeitesApp = () => {
  return (
    <>
      <CircEnfeite className={classes.circ1} />
      <CircEnfeite className={classes.circ2} />
      <CircEnfeite className={classes.circ3} />
      <BrilEnfeite className={classes.bril1} />
      <BrilEnfeite className={classes.bril2} />
      <BrilEnfeite className={classes.bril3} />
    </>
  )
}

export default EnfeitesApp
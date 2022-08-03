import React from 'react'
import classes from './WrapperMenu.module.css';
import { ReactComponent as IconArrowBack } from '../../assets/arrow-back.svg'

const WrapperMenu = ({ setShown, title, children, className }) => {

  return (
    <section className={className}>
      <button className={classes.btnVoltar} title='Voltar' onClick={() => setShown(false)}><IconArrowBack /></button>
      <div>
        <p className={classes.title}>{title}</p>
        {children}
      </div>
    </section>
  )
}

export default WrapperMenu
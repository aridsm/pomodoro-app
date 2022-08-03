import React from 'react'
import classes from './MenuNav.module.css'

const MenuNav = ({ intrucoesHandler, configsHandler, contagemHandler, className }) => {
  return (
    <section className={className}>
      <p>Menu</p>
      <nav className={classes.nav}>
        <button onClick={intrucoesHandler}>Instruçoes</button>
        <button onClick={configsHandler}>Configuraçoes</button>
        <button onClick={contagemHandler}>Contagem</button>
      </nav>
    </section>
  )
}

export default MenuNav
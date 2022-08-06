import React from 'react'
import WrapperMenu from '../utilities/WrapperMenu'
import classes from './MenuNav.module.css'

const MenuNav = ({ intrucoesHandler, configsHandler, contagemHandler, className, setShown }) => {
  return (
    <WrapperMenu title='Menu' setShown={setShown} className={className}>
      <nav className={classes.nav}>
        <button onClick={intrucoesHandler}>Instruções</button>
        <button onClick={configsHandler}>Configurações</button>
        <button onClick={contagemHandler}>Contagem</button>
      </nav>
    </WrapperMenu>
  )
}

export default MenuNav
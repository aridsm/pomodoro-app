import React from 'react'
import WrapperMenu from '../utilities/WrapperMenu'
import classes from './MenuContagem.module.css'

const MenuContagem = ({ className, setShown }) => {
  return (
    <WrapperMenu title='Configuraçoes' setShown={setShown} className={className}>
      contagem novo
    </WrapperMenu>
  )
}

export default MenuContagem
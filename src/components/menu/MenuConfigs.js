import React from 'react'
import classes from './MenuConfigs.module.css'
import WrapperMenu from '../utilities/WrapperMenu'

const MenuConfigs = ({ className, setShown }) => {
  return (
    <WrapperMenu title='Configuraçoes' setShown={setShown} className={className}>
      configuraçoes novo
    </WrapperMenu>
  )
}

export default MenuConfigs
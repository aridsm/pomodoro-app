import React, { useContext } from 'react'
import { ConfigsContext } from '../../context/ConfigsContext'
import WrapperMenu from '../utilities/WrapperMenu'
import classes from './MenuContagem.module.css'

const MenuContagem = ({ className, setShown }) => {

  const { configs } = useContext(ConfigsContext)

  const { contagem } = configs;

  return (
    <WrapperMenu title='Contagem de rodadas' setShown={setShown} className={className}>
      <ul className={classes.lista}>
        <li>
          <p>Atividade</p>
          <span>{contagem.atividade}</span>
        </li>
        <li>
          <p>Pausa curta</p>
          <span>{contagem.pausaCurta}</span>
        </li>
        <li>
          <p>Pausa longa</p>
          <span>{contagem.pausaLonga}</span>
        </li>
      </ul>
    </WrapperMenu>
  )
}

export default MenuContagem
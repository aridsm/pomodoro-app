import React from 'react';
import { ReactComponent as InfosIcon } from '../assets/info-circle.svg'
import { ReactComponent as ConfigIcon } from '../assets/gear.svg'
import { ReactComponent as SpeedIcon } from '../assets/speedometer.svg'
import styles from './Styles/Botoes.module.css'
import Botao from './Botao';

const Botoes = () => {
  return (
    <nav className={styles.nav}>
      <Botao Icon={InfosIcon} name='Regras' />
      <Botao Icon={ConfigIcon} name='Configuraçoes' />
      <Botao Icon={SpeedIcon} name='Velocidade' />
    </nav>
  )
}

export default Botoes
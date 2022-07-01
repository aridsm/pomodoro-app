import React from 'react'
import styles from './Styles/Botao.module.css'

const Botao = ({ Icon, name, visible, isVisible, ...args }) => {

  const [isToggleVisible, setIsToggleVisible] = React.useState(false)

  return (
    <div className={styles.containerBotao}>
      <button onMouseOver={() => setIsToggleVisible(true)} onMouseOut={() => setIsToggleVisible(false)} onClick={() => isVisible(!visible)} ><Icon /></button>
      <p className={`${styles.toggle} ${isToggleVisible ? styles.visible : ''}`}>{name}</p>
    </div>
  )
}

export default Botao
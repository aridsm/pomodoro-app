import React from 'react'
import styles from './Styles/Modais.module.css'
import { GlobalModalContext } from './GlobalContext/ModalContext'
import ModalRules from './ModalRules.js'
import ModalSpeed from './ModalSpeed.js'
import ModalConfigs from './ModalConfigs.js'

const Modais = () => {

  const modais = React.useContext(GlobalModalContext)

  return (
    <div className={styles.modaisContainer}>

      <div className={styles.modal}>
        {modais.isRulesOpen ? <ModalRules /> : modais.isConfigsOpen ? <ModalConfigs /> : modais.isSpeedOpen ? <ModalSpeed /> : ''}
      </div>
    </div>
  )
}

export default Modais
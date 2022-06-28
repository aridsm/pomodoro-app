import React from 'react'
import styles from './Styles/ModalRules.module.css'

const ModalRules = () => {
  return (
    <section className={styles.sectionInstrucoes}>
      <h2>Instruções</h2>
      <ol className={styles.listaInstrucoes}>
        <li>Ao clicar no botão de <strong>play</strong>, o cronômetro iniciará a contagem.</li>
        <li>A cada <strong>25 minutos</strong> um alarme será acionado, avisando que está na hora de uma <strong> pequena pausa</strong>.</li>
        <li>Terminado o intervalo, outro alarme será acionado para que você <strong>volte às atividades</strong>.</li>
        <li>A cada <strong>4 rodadas</strong> do pomodoro você terá direito a uma <strong> pausa maior</strong>.</li>
        <li>Caso necessário, você pode mudar o valor dos intervalos.</li>
        <li>Esteja seguro de ter o volume do navegador ligado, ou volte aqui para verificar quanto tempo resta.</li>
        <li>Bons estudos!</li>
      </ol>
    </section>
  )
}

export default ModalRules
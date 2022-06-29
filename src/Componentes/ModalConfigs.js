import React from 'react'
import ItemAlarme from './ItemAlarme'
import styles from './Styles/ModalConfigs.module.css'
import InputRange from './InputRange'

const ModalConfigs = () => {

  return (
    <section>
      <h2>Configurações</h2>
      <ul class="configuracoes">
        <InputRange label='Intervalo de atividade' name='atividade' value='50' step='10' min='10' valueRange='25:00' />
        <InputRange label='Intervalo de pausas longas' name='pausas-longas' value='50' step='25' min='25' valueRange='20:00' />
        <InputRange label='Intervalo de pausas curtas' name='pausas-curtas' value='50' step='10' min='10' valueRange='5:00' />
        <InputRange label='Volume do alarme' name='alarme' value='50' step='1' min='0' valueRange='50' />
        <li>
          <p>Toque do alarme</p>
          <ul class="container-toques">
            <ItemAlarme name='Tom de alarme' />
            <ItemAlarme name='Scanner de dados' />
            <ItemAlarme name='Relogio Digital' />
          </ul>
        </li>

        <li><button>Configurações predefinidas</button></li>
        <li><button>Cancelar mudanças</button></li>
        <li><button>Confirmar mudanças</button></li>
      </ul>
    </section>
  )
}

export default ModalConfigs
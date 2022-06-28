import React from 'react'
import InputRange from './InputRange'
import styles from './Styles/ModalConfigs.module.css'

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
            <li>
              <button class="selected">
                <p>Tom de alarme</p>
                <i class="bi bi-soundwave"></i>
                <audio src="audios/mixkit-alarm-tone-996.wav"></audio>
              </button>
            </li>
            <li>
              <button>
                <p>Scanner de dados</p>
                <i class="bi bi-soundwave"></i>
                <audio src="audios/mixkit-data-scaner-2847.wav"></audio>
              </button>
            </li>
            <li>
              <button>
                <p>Relógio digital</p>
                <i class="bi bi-soundwave"></i>
                <audio src="audios/mixkit-digital-clock-digital-alarm-buzzer-992.wav"></audio>
              </button>
            </li>
          </ul>
        </li>

        <li><button class="restaurar-cronometro btn-geral">Configurações predefinidas</button></li>
        <li><button class="cancelar-mudancas btn-geral">Cancelar mudanças</button></li>
        <li><button class="aceitar-mudancas btn-geral">Confirmar mudanças</button></li>
      </ul>
    </section>
  )
}

export default ModalConfigs
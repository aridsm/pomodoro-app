import React, { useContext, useState } from 'react'
import classes from './MenuConfigs.module.css'
import WrapperMenu from '../utilities/WrapperMenu'
import { ConfigsContext } from '../../context/ConfigsContext'
import MenuConfigsInput from './MenuConfigsInput'
import MenuRadioInput from './MenuRadioInput';
import WrapperItemMenu from '../utilities/WrapperItemMenu'
import MenuConfigsRange from './MenuConfigsRange'

const toques = [
  {
    id: 't1',
    label: 'Tom de alarme',
    toque: 'toque-1.wav'
  },
  {
    id: 't2',
    label: 'Relógio digital',
    toque: 'toque-2.wav'
  },
  {
    id: 't3',
    label: 'Scanner',
    toque: 'toque-3.wav'
  }
]

const MenuConfigs = ({ className, setShown }) => {

  const { configs, updateConfigs, setInitialValue, initialState } = useContext(ConfigsContext);
  const [volume, setVolume] = useState(configs.volume);
  const [segundosConfigs, setSegundosConfigs] = useState(configs.segundos);
  const [inputValid, setInputValid] = useState({
    atividade: true,
    pausaCurta: true,
    pausaLonga: true
  })
  const [toqueSelecionado, setToqueSelecionado] = useState(configs.audio);
  const [velocidade, setVelocidade] = useState(configs.velocidade);

  const changeAtividadeValue = (totalSegundos) => {
    setSegundosConfigs({ ...segundosConfigs, atividade: totalSegundos })
  }

  const changePausaCurtaValue = (totalSegundos) => {
    setSegundosConfigs({ ...segundosConfigs, pausaCurta: totalSegundos })
  }

  const changePausaLongaValue = (totalSegundos) => {
    setSegundosConfigs({ ...segundosConfigs, pausaLonga: totalSegundos })
  }

  const setValidInputAtividade = (valid) => {
    setInputValid({ ...inputValid, atividade: valid })
  }

  const setValidInputPausaCurta = (valid) => {
    setInputValid({ ...inputValid, pausaCurta: valid })
  }

  const setValidInputPausaLonga = (valid) => {
    setInputValid({ ...inputValid, pausaLonga: valid })
  }

  const salvarNovasConfigs = () => {
    const valuesInputsValidation = Object.values(inputValid);
    const AreAllInputsValid = valuesInputsValidation.every(validationValue => validationValue);

    if (!AreAllInputsValid) return;

    const newConfigs = {
      segundos: segundosConfigs,
      volume: volume,
      audio: toqueSelecionado,
      velocidade: velocidade
    }
    updateConfigs(newConfigs);
  }

  const voltarConfigsIniciais = () => {
    setVolume(initialState.volume);
    setSegundosConfigs(initialState.segundos);
    setToqueSelecionado(initialState.audio);
    setVelocidade(initialState.velocidade)
    setInitialValue();
  }

  return (
    <WrapperMenu title='Configurações' setShown={setShown} className={className}>
      <form onSubmit={(e) => e.preventDefault()}>
        <ul className={classes.listaInputs}>
          <MenuConfigsInput value={segundosConfigs.atividade} updateValue={changeAtividadeValue} id='atividade' label='Intervalo de atividade' validateInputs={setValidInputAtividade} />
          <MenuConfigsInput value={segundosConfigs.pausaCurta} updateValue={changePausaCurtaValue} id='pausas-curtas' label='Intervalo de pausas curtas' validateInputs={setValidInputPausaCurta} />
          <MenuConfigsInput value={segundosConfigs.pausaLonga} updateValue={changePausaLongaValue} id='pausas-longas' label='Intervalo de pausas longas' validateInputs={setValidInputPausaLonga} />

          <MenuConfigsRange legend='Volume do alarme' value={volume} setValue={setVolume} id='volume' valueUnit={`${volume}%`} />
          <MenuConfigsRange legend='Velocidade do alarme' value={velocidade} setValue={setVelocidade} id='velocidade' min='1' valueUnit={`-1 s / ${velocidade / 100} s`} />

          <WrapperItemMenu legend='Volume do alarme'>
            {toques.map(({ id, toque, label }) =>
              <MenuRadioInput id={id} value={toque} label={label} toqueSelecionado={toqueSelecionado} setToqueSelecionado={setToqueSelecionado} key={id} volume={volume} />
            )}
          </WrapperItemMenu>
        </ul>
        <button className={classes.btnSalvar} onClick={salvarNovasConfigs}>Salvar alterações</button>
        <button className={classes.btnDefault} onClick={voltarConfigsIniciais}>Configurações predefinidas</button>
      </form>
    </WrapperMenu >
  )
}

export default MenuConfigs
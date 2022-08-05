import React, { useContext, useEffect, useState } from 'react'
import classes from './MenuConfigs.module.css'
import WrapperMenu from '../utilities/WrapperMenu'
import { ConfigsContext } from '../../context/ConfigsContext'
import MenuConfigsInput from './MenuConfigsInput'
import MenuRadioInput from './MenuRadioInput';

const toques = [
  {
    id: 't1',
    label: 'Tom de alarme',
    toque: 'toque-1.wav'
  },
  {
    id: 't2',
    label: 'Relogio digital',
    toque: 'toque-2.wav'
  },
  {
    id: 't3',
    label: 'Scanner',
    toque: 'toque-3.wav'
  }
]

const MenuConfigs = ({ className, setShown }) => {

  const { configs, updateConfigs, setInitialValue } = useContext(ConfigsContext);
  const [volume, setVolume] = useState(configs.volume);
  const [segundosConfigs, setSegundosConfigs] = useState(configs.segundos);
  const [toqueSelecionado, setToqueSelecionado] = useState(configs.audio)

  const changeAtividadeValue = (totalSegundos) => {
    setSegundosConfigs({ ...segundosConfigs, atividade: totalSegundos })
  }

  const changePausaCurtaValue = (totalSegundos) => {
    setSegundosConfigs({ ...segundosConfigs, pausaCurta: totalSegundos })
  }

  const changePausaLongaValue = (totalSegundos) => {
    setSegundosConfigs({ ...segundosConfigs, pausaCurta: totalSegundos })
  }

  const salvarNovasConfigs = () => {
    updateConfigs(segundosConfigs, volume, toqueSelecionado)
  }

  const voltarConfigsIniciais = () => {
    setInitialValue()
  }

  return (
    <WrapperMenu title='Configuraçoes' setShown={setShown} className={className}>
      <form onSubmit={(e) => e.preventDefault()}>
        <ul className={classes.listaInputs}>
          <>
            <MenuConfigsInput value={segundosConfigs.atividade} updateValue={changeAtividadeValue} id='atividade' legend='Intervalo de atividade' />
            <MenuConfigsInput value={segundosConfigs.pausaCurta} updateValue={changePausaCurtaValue} id='pausas-curtas' legend='Intervalo de pausas curtas' />
            <MenuConfigsInput value={segundosConfigs.pausaLonga} updateValue={changePausaLongaValue} id='pausas-longas' legend='Intervalo de pausas longas' />
          </>

          <li className={classes.volumeField}>
            <label>Volume do alarme</label>
            <input type="range" value={volume} id='volume' onChange={({ target }) => setVolume(target.value)} />
            <p className={classes.volumeValue}>{volume}%</p>
          </li>

          <li>
            <fieldset className={classes.fieldToques}>
              <legend>Toque do alarme</legend>
              {toques.map(({ id, toque, label }) =>
                <MenuRadioInput id={id} value={toque} label={label} toqueSelecionado={toqueSelecionado} setToqueSelecionado={setToqueSelecionado} key={id} volume={volume} />
              )}
            </fieldset>
          </li>
        </ul>
        <button className={classes.btnSalvar} onClick={salvarNovasConfigs}>Salvar alteraçoes</button>
        <button className={classes.btnDefault} onClick={voltarConfigsIniciais}>Configuraçoes predefinidas</button>
      </form>
    </WrapperMenu>
  )
}

export default MenuConfigs
import React, { useContext, useEffect, useState } from 'react'
import classes from './MenuConfigs.module.css'
import WrapperMenu from '../utilities/WrapperMenu'
import { ConfigsContext } from '../../context/ConfigsContext'
import MenuConfigsInput from './MenuConfigsInput'

const MenuConfigs = ({ className, setShown }) => {

  const { configs, updateConfigs, setInitialValue } = useContext(ConfigsContext);
  const { segundos } = configs
  const [segundosConfigs, setSegundosConfigs] = useState(segundos)

  const changeAtividadeValue = (totalSegundos) => {
    setSegundosConfigs({ ...segundosConfigs, atividade: totalSegundos })
  }

  const changePausaCurtadeValue = (totalSegundos) => {
    setSegundosConfigs({ ...segundosConfigs, pausaCurta: totalSegundos })
  }

  const changePausaLongaValue = (totalSegundos) => {
    setSegundosConfigs({ ...segundosConfigs, pausaCurta: totalSegundos })
  }

  const salvarNovasConfigs = () => {
    updateConfigs(segundosConfigs)
  }

  const voltarConfigsIniciais = () => {
    setInitialValue()
  }

  return (
    <WrapperMenu title='Configuraçoes' setShown={setShown} className={className}>
      <form onSubmit={(e) => e.preventDefault()}>
        <ul className={classes.listaInputs}>
          <MenuConfigsInput value={segundosConfigs.atividade} updateValue={changeAtividadeValue} id='atividade' legend='Intervalo de atividade' />
          <MenuConfigsInput value={segundosConfigs.pausaCurta} updateValue={changePausaCurtadeValue} id='pausas-curtas' legend='Intervalo de pausas curtas' />
          <MenuConfigsInput value={segundosConfigs.pausaLonga} updateValue={changePausaLongaValue} id='pausas-longas' legend='Intervalo de pausas longas' />
        </ul>
        <button className={classes.btnSalvar} onClick={salvarNovasConfigs}>Salvar alteraçoes</button>
        <button className={classes.btnDefault} onClick={voltarConfigsIniciais}>Configuraçoes predefinidas</button>
      </form>
    </WrapperMenu>
  )
}

export default MenuConfigs
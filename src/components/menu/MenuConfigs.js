import React, { useContext, useEffect, useState } from 'react'
import classes from './MenuConfigs.module.css'
import WrapperMenu from '../utilities/WrapperMenu'
import { ConfigsContext } from '../../context/ConfigsContext'
import MenuConfigsInput from './MenuConfigsInput'

const MenuConfigs = ({ className, setShown }) => {

  const { configs, updateConfigs, setInitialValue } = useContext(ConfigsContext);

  const [segundosConfigs, setSegundosConfigs] = useState({})
  //usEffect para mudar as configs antes de fechar?

  useEffect(() => {
    setSegundosConfigs(configs.segundos)
  }, [configs])


  const changeAtividadeValue = ({ target }) => {
    setSegundosConfigs({ ...segundosConfigs, atividade: target.value })
  }

  const changePausaCurtadeValue = ({ target }) => {
    setSegundosConfigs({ ...segundosConfigs, pausaCurta: target.value })
  }

  const changePausaLongaValue = ({ target }) => {
    setSegundosConfigs({ ...segundosConfigs, pausaLonga: target.value })
  }

  const salvarNovasConfigs = () => {
    console.log(segundosConfigs)
    // updateConfigs(segundosConfigs)
  }

  const voltarConfigsIniciais = () => {
    setInitialValue()
  }

  return (
    <WrapperMenu title='Configuraçoes' setShown={setShown} className={className}>
      <form onSubmit={(e) => e.preventDefault()}>
        <ul className={classes.listaInputs}>
          <MenuConfigsInput value={segundosConfigs.atividade} onChange={changeAtividadeValue} id='atividade' legend='Intervalo de atividade' />
          <MenuConfigsInput value={segundosConfigs.pausaCurta} onChange={changePausaCurtadeValue} id='pausas-curtas' legend='Intervalo de pausas curtas' />
          <MenuConfigsInput value={segundosConfigs.pausaLonga} onChange={changePausaLongaValue} id='pausas-longas' legend='Intervalo de pausas longas' />
        </ul>
        <button className={classes.btnSalvar} onClick={salvarNovasConfigs}>Salvar alteraçoes</button>
        <button className={classes.btnDefault} onClick={voltarConfigsIniciais}>Configuraçoes predefinidas</button>
      </form>
    </WrapperMenu>
  )
}

export default MenuConfigs
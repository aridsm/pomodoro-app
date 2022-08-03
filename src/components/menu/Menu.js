import React, { useEffect, useState } from 'react'
import classes from './Menu.module.css'
import { ReactComponent as IconMenu } from '../../assets/menu.svg'
import useVisibility from '../../hooks/useVisibility'
import WrapperMenu from '../utilities/WrapperMenu'
import MenuInstrucoes from './MenuInstrucoes'
import MenuNav from './MenuNav'
import MenuConfigs from './MenuConfigs'
import MenuContagem from './MenuContagem'

const Menu = () => {

  const { isShown, setIsShown, menuRef } = useVisibility();
  const [isNavMenuShown, setIsNavMenuShown] = useState(true);
  const [isInstrucoesShown, setIsInstrucoesShown] = useState(false);
  const [isConfigsShown, setIsConfigsShown] = useState(false);
  const [isContagemShown, setIsContagemShown] = useState(false);

  useEffect(() => {
    if (isInstrucoesShown || isConfigsShown || isContagemShown) {
      setIsNavMenuShown(false)
    } else {
      setIsNavMenuShown(true)
    }
  }, [isInstrucoesShown, isConfigsShown, isContagemShown])

  const intrucoesHandler = () => {
    setIsInstrucoesShown(true);
  }
  const configsHandler = () => {
    setIsConfigsShown(true);
  }
  const contagemHandler = () => {
    setIsContagemShown(true);
  }

  return (
    <>
      <section ref={menuRef}>
        <button className={classes.menu} onClick={() => setIsShown(true)} type="button"><span>Menu</span> <IconMenu /></button>
        {isShown &&
          <>
            <section className={classes.container}>
              <MenuNav intrucoesHandler={intrucoesHandler} configsHandler={configsHandler} contagemHandler={contagemHandler} className={`${classes.menuContainer} ${isNavMenuShown ? classes.ativo : ''}`} />
              <MenuInstrucoes className={`${classes.menuContainer} ${isInstrucoesShown ? classes.ativo : ''}`} setShown={setIsInstrucoesShown} />
              <MenuConfigs className={`${classes.menuContainer} ${isConfigsShown ? classes.ativo : ''}`} setShown={setIsConfigsShown} />
              <MenuContagem className={`${classes.menuContainer} ${isContagemShown ? classes.ativo : ''}`} setShown={setIsContagemShown} />
            </section>
          </>
        }
      </section>
    </>
  )
}

export default Menu
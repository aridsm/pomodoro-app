import React, { useEffect, useState } from 'react'
import classes from './Menu.module.css'
import { ReactComponent as IconMenu } from '../../assets/menu.svg'
import useVisibility from '../../hooks/useVisibility'
import WrapperMenu from '../utilities/WrapperMenu'
import MenuInstrucoes from './MenuInstrucoes'

const Menu = () => {

  const { isShown, setIsShown, menuRef } = useVisibility();
  const [isNavMenuShown, setIsNavMenuShown] = useState(true);
  const [isInstrucoesMenuShown, setIsInstrucoesMenuShown] = useState(false);

  useEffect(() => {
    if (isInstrucoesMenuShown) {
      setIsNavMenuShown(false)
    } else {
      setIsNavMenuShown(true)
    }
  }, [isInstrucoesMenuShown])

  const intrucoesHandler = () => {
    setIsInstrucoesMenuShown(true);
  }

  return (
    <>
      <section ref={menuRef}>
        <button className={classes.menu} onClick={() => setIsShown(true)}><span>Menu</span> <IconMenu /></button>
        {isShown &&
          <>
            {isNavMenuShown &&
              <WrapperMenu title="Menu">
                <nav className={classes.nav}>
                  <button onClick={intrucoesHandler}>Instruçoes</button>
                  <button>Configuraçoes</button>
                  <button>Contagem</button>
                </nav>
              </WrapperMenu>
            }
            {isInstrucoesMenuShown &&
              <MenuInstrucoes />
            }
          </>
        }
      </section>
    </>
  )
}

export default Menu
import React from 'react'
import Footer from './components/Footer';
import Timer from './components/Timer';
import classes from './App.module.css'
import { ReactComponent as CircEnfeite } from './assets/circ.svg'
import Menu from './components/Menu';
import Atividade from './components/Atividade';

function App() {
  return (
    <main className={classes.main} >
      <CircEnfeite className={classes.circ1} />
      <CircEnfeite className={classes.circ2} />
      <CircEnfeite className={classes.circ3} />
      <div className={classes.container}>
        <Menu />
        <Atividade />
        <Timer />
        <Footer />
      </div>
    </main>
  )
}

export default App;

import React from 'react'
import Footer from './components/Footer';
import Timer from './components/Timer';
import classes from './App.module.css'
import Menu from './components/menu/Menu';
import Atividade from './components/Atividade';
import EnfeitesApp from './components/EnfeitesApp';

function App() {
  return (
    <main className={classes.main} >
      <EnfeitesApp />
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

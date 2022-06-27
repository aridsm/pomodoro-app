import styled from 'styled-components'
import Botoes from './Componentes/Botoes';
import Timer from './Componentes/Timer';
import Titulo from './Componentes/Titulo';
import Footer from './Componentes/Footer';


function App() {
  return (
    <main>
      <div>
        <Botoes />
        <Titulo />
        <Timer />
        <Footer />
      </div>
    </main>
  )
}

export default App;

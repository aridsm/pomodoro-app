import styled from 'styled-components'
import Botoes from './Componentes/Botoes';
import Timer from './Componentes/Timer';
import Titulo from './Componentes/Titulo';
import Footer from './Componentes/Footer';
import { ModalContext } from './Componentes/GlobalContext/ModalContext';
import Modais from './Componentes/Modais';

function App() {
  return (
    <main>
      <ModalContext>
        <div>
          <Botoes />
          <Titulo />
          <Timer />
          <Footer />
        </div>
        <Modais />
      </ModalContext>
    </main>
  )
}

export default App;

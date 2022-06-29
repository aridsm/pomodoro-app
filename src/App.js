import styled from 'styled-components'
import Botoes from './Componentes/Botoes';
import Timer from './Componentes/Timer';
import Titulo from './Componentes/Titulo';
import Footer from './Componentes/Footer';
import { ModalContext } from './Componentes/GlobalContext/ModalContext';
import { ConfigsContext } from './Componentes/GlobalContext/ConfigsContext';
import Modais from './Componentes/Modais';

function App() {
  return (
    <main>
      <ModalContext>
        <ConfigsContext>
          <div>
            <Botoes />
            <Titulo />
            <Timer />
            <Footer />
          </div>
          <Modais />
        </ConfigsContext>
      </ModalContext>
    </main>
  )
}

export default App;

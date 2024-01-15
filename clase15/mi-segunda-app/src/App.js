import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks + 1);
    console.log("click");
  }
  const clickmas3 = () => {
    setNumClicks(nroClicks + 3);
    console.log("click")
  }
  const clickmenos3 = () => {
    setNumClicks(nroClicks - 3);
    console.log("click")
  }
  const clickmas1 = () => {
    setNumClicks(nroClicks + 1);
    console.log("click")
  }
  const clickmenos1 = () => {
    setNumClicks(nroClicks -1);
    console.log("click")
  }
  const reiniciar = () => {
    setNumClicks(0);
    console.log("reiniciar")
  }
  const desaparece = () => {
    setNumClicks(0);
    console.log("desaparece")
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={clickmenos3} />
          <Boton texto="+3" esBotonClick={true}
            funcionClick={clickmas3} />
          <Boton texto="-1" esBotonClick={true}
            funcionClick={clickmenos1 } />
          <Boton texto="+1" esBotonClick={true}
            funcionClick={clickmas1 } />            
        </div>
            <Boton texto="Desaparecer" esBotonClick={false}
            funcionClick={desaparece} />
            <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        
        
      </div>
    </div>

    
  );
}

export default App;

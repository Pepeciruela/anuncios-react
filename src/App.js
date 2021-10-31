import './App.css'
import PaginaAnuncios from './Componentes/Anuncios/PaginaAnuncios/PaginaAnuncios'
import PaginaLogin from './Componentes/Anuncios/PaginaLogin/PaginaLogin';
import {useState} from 'react';

function App() {

const[estaRegistrado, setEstaRegistrado] = useState(false);
const cambiarRegistro = () => setEstaRegistrado(true);

  return (
    <div>
      
      {estaRegistrado ? (
      <PaginaAnuncios estaRegistrado={estaRegistrado}/>
      )
      :  
      (<PaginaLogin onLogin = {cambiarRegistro}/>)
      }
    </div>
  );
}

export default App;

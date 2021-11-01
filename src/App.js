import './App.css'
import PaginaAnuncios from './Componentes/Anuncios/PaginaAnuncios/PaginaAnuncios'
import PaginaLogin from './Componentes/Anuncios/PaginaLogin/PaginaLogin';
import {useState} from 'react';
import {logout} from './Componentes/Anuncios/PaginaLogin/servicios'

function App({estaLogueadoInicio}) {

const[estaRegistrado, setEstaRegistrado] = useState(estaLogueadoInicio);

const cambiarRegistro = () => setEstaRegistrado(true);

const borrarRegistro = () => {
  logout().then(() => setEstaRegistrado(false));
}

  return (
    <div>
      
      {estaRegistrado ? (
      <PaginaAnuncios estaRegistrado={estaRegistrado} onLogout={borrarRegistro}/>
      )
      :  
      (<PaginaLogin onLogin = {cambiarRegistro}/>)
      }
    </div>
  );
}

export default App;

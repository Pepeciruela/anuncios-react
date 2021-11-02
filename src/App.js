import './App.css'
import PaginaAnuncios from './Componentes/Anuncios/PaginaAnuncios/PaginaAnuncios'
import PaginaLogin from './Componentes/Anuncios/PaginaLogin/PaginaLogin';
import {useState} from 'react';
import {logout} from './Componentes/Anuncios/PaginaLogin/servicios'

import {ContextoRegistroProvider} from './Componentes/Anuncios/contexto'

function App({estaLogueadoInicio}) {

const[estaRegistrado, setEstaRegistrado] = useState(estaLogueadoInicio);

const cambiarRegistro = () => setEstaRegistrado(true);

const borrarRegistro = () => {
  logout().then(() => setEstaRegistrado(false));
}

  return (
    <ContextoRegistroProvider value={{estaRegistrado, cambiarRegistro, borrarRegistro}}> 
    <div>
      
      {estaRegistrado ? (
      <PaginaAnuncios/>
      )
      :  
      (<PaginaLogin onLogin = {cambiarRegistro}/>)
      }
    </div>

    </ContextoRegistroProvider> 
  );
}

export default App;

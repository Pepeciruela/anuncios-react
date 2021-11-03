import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PaginaAnuncios from './Componentes/Anuncios/PaginaAnuncios/PaginaAnuncios'
import PaginaLogin from './Componentes/Anuncios/PaginaLogin/PaginaLogin';
import {useState} from 'react';
import {logout} from './Componentes/Anuncios/PaginaLogin/servicios'
import {ContextoRegistroProvider} from './Componentes/Anuncios/contexto'
import RutaPrivada from './Componentes/Anuncios/RutaPrivada'

function App({estaLogueadoInicio}) {

const[estaRegistrado, setEstaRegistrado] = useState(estaLogueadoInicio);

const cambiarRegistro = () => setEstaRegistrado(true);

const borrarRegistro = () => {
  logout().then(() => setEstaRegistrado(false));
}

  return (
    <Router>
      <ContextoRegistroProvider value={{estaRegistrado, cambiarRegistro, borrarRegistro}}> 
    <div>
      <Switch>
        <Route path='/login' component={PaginaLogin}>
        {estaRegistrado ? <Redirect to='/adverts'/>: <PaginaLogin onLogin={cambiarRegistro}/>}
        </Route>
        <RutaPrivada path='/adverts' component={PaginaAnuncios}/>
        <Route path='/'>
          <Redirect to='/adverts'></Redirect>
        </Route>
      </Switch>
    </div>

    </ContextoRegistroProvider> 
    </Router>
    
  );
}

export default App;

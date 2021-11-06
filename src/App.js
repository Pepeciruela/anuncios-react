import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PaginaAnuncios from './Componentes/Anuncios/PaginaAnuncios/PaginaAnuncios'
import PaginaLogin from './Componentes/Anuncios/PaginaLogin/PaginaLogin';
import NuevoAnuncio from './Componentes/Anuncios/NuevoAnuncio/NuevoAnuncio';
import {useState} from 'react';
import {logout} from './Componentes/Anuncios/PaginaLogin/servicios'
import {ContextoRegistroProvider} from './Componentes/Anuncios/contexto'
import RutaPrivada from './Componentes/Anuncios/RutaPrivada'
import PaginaAnuncio from './Componentes/Anuncios/DetalleAnuncio/PaginaAnuncio';

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
        <RutaPrivada exact path='/adverts/new' component={NuevoAnuncio}/>
        <RutaPrivada path='/adverts/:id' component={PaginaAnuncio}></RutaPrivada>
        <RutaPrivada exact path='/adverts' component={PaginaAnuncios}/>
        <RutaPrivada exact path='/'>
          <Redirect to='/adverts'></Redirect>
        </RutaPrivada>
        <Route path='/404'>
          <div>404 Not found page</div>
        </Route>
        <Route>
          <Redirect to='/404'></Redirect>
        </Route>
      </Switch>
    </div>
    </ContextoRegistroProvider> 
    </Router>
    
  );
}

export default App;

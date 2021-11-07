import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storage from './utilidades/storage';
import { autorizacionHeader } from './api/clientes';
import './styles/boostrap.css'

const accessToken = storage.get('auth');
autorizacionHeader(accessToken);


ReactDOM.render(
  <React.StrictMode>
    <App estaLogueadoInicio = {!!accessToken}/>
  </React.StrictMode>,
  document.getElementById('root')
);


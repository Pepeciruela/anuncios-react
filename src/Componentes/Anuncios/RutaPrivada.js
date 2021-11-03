import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import ContextoRegistro from './contexto';

const RutaPrivada =  props =>{
    const {estaRegistrado} = useContext(ContextoRegistro);
    return estaRegistrado ? <Route {...props}/> : <Redirect to='/login'/>
};

export default RutaPrivada;

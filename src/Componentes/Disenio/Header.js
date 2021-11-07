import { useContext } from 'react';
import classNames from 'classnames'
import ContextoRegistro from '../Anuncios/contexto';
import {NavLink} from 'react-router-dom';
import '../../styles/boostrap.css'
import './Header.css'


function Header({className}){
    const {estaRegistrado, borrarRegistro } = useContext(ContextoRegistro)
    return(
        <header className={classNames('header', className)}>
        <div className='header-logo'>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to='/adverts' className="navbar-brand">Inicio</NavLink>
            <NavLink to='/adverts/new' className="navbar-brand">Nuevo Anuncio</NavLink>
            
            {estaRegistrado ? (
                <button className="btn btn-danger" onClick={borrarRegistro}>
                    Log out
                </button>
            ) : (
                <button className="btn btn-primary">
                    Log in
                </button>
            )}
            </nav>
            
    </header>);

}

export default Header;
import { useContext } from 'react';
import classNames from 'classnames'
import ContextoRegistro from '../Anuncios/contexto';
import {Link, NavLink} from 'react-router-dom';


function Header({className}){
    const {estaRegistrado, borrarRegistro } = useContext(ContextoRegistro)
    return(
        <header className={classNames('header', className)}>
        <div className='header-logo'>
        </div>
        <nav className='header-nav'>
            <NavLink to='/averts/new'>Nuevo Anuncio</NavLink>
            {estaRegistrado ? (
                <button className='header-button' onClick={borrarRegistro}>
                    Log out
                </button>
            ) : (
                <button className='header-button'>
                    Log in
                </button>
            )}
            </nav>
            
    </header>);

}

export default Header;
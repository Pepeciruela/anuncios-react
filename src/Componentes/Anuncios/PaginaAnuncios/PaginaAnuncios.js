import { useState, useEffect } from 'react';
import {traerAnuncios} from './servicios'
import './PaginaAnuncios.css';
import Disenio from '../../Disenio/Disenio';
import { Link } from 'react-router-dom';

const EstaVacio = () => (
  <div>
    <p> No hay anuncios que mostrar. Crea tu el primero</p>
    <button as={Link} to='adverts/new'>
      Nuevo anuncio
    </button>
  </div>
);

function PaginaAnuncios ({estaRegistrado, onLogout}){
  const [anuncios, setAnuncios] = useState([]);

    useEffect(()=> {
      traerAnuncios().then(adverts => setAnuncios(adverts));
    },[]);
    
    return (
      <Disenio title='Últimos anuncios' estaRegistrado = {estaRegistrado} onLogout={onLogout}>
        <div className='paginaAnuncios'>
        Últimos anuncios
        {anuncios.length ? (
        <ul>
        {anuncios.map(anuncio =>
        <div key={anuncio.id}>
          <Link to={`/adverts/${anuncio.id}`}>
            <h2>{anuncio.name}</h2>
          </Link>
            <p>Precio: {anuncio.price}</p>
            <p> Tags: {anuncio.tags.map(tag => 
              <p>{tag}</p>)}</p>
            <p>{anuncio.sale ? 'En venta' : 'Se compra'}</p>
        </div>
        )}
    </ul>
        ) : ( <EstaVacio/>)}
    </div>
      </Disenio>
    );

}

export default PaginaAnuncios;
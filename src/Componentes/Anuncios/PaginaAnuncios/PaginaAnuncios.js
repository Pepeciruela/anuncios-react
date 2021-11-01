import { useState, useEffect } from 'react';
import {traerAnuncios} from './servicios'
import './PaginaAnuncios.css';
import classNames from 'classnames';
import Disenio from '../../Disenio/Disenio';

function PaginaAnuncios ({estaRegistrado, onLogout}){
  const [anuncios, setAnuncios] = useState([]);

    useEffect(()=> {
      traerAnuncios().then(adverts => setAnuncios(adverts));
    },[]);
    
    return (
      <Disenio title='Últimos anuncios' estaRegistrado = {estaRegistrado} onLogout={onLogout}>
        <div className='paginaAnuncios'>
        Últimos anuncios
        <ul>
            {anuncios.map(anuncio =>
            <div key={anuncio.id}>
                <h2 key={anuncio.id}>{anuncio.name}</h2>
                <p>Precio: {anuncio.price}</p>
                <p> Tags: {anuncio.tags.map(tag => 
                  <p>{tag}</p>)}</p>
                <p>{anuncio.sale ? 'En venta' : 'Se compra'}</p>
            </div>
            )}
        </ul>
    </div>
      </Disenio>
    );

}

export default PaginaAnuncios;
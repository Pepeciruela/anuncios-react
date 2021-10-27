import { useState, useEffect } from 'react';
import {traerAnuncios} from './servicios'
import './PaginaAnuncios.css';
import classNames from 'classnames';
import Disenio from '../../Disenio/Disenio';

function PaginaAnuncios (){
  const [anuncios, setAnuncios] = useState([]);

    useEffect(()=> {
      traerAnuncios().then(response => setAnuncios(response.data));
    },[]);
    return (
      <Disenio title='Últimos anuncios'>
        <div className='paginaAnuncios'>
        Últimos anuncios
        <ul>
            {anuncios.map(anuncio => (
                <li key={anuncio.id}>{anuncio.content}</li>
            ))}
        </ul>
    </div>
      </Disenio>
    );

}

export default PaginaAnuncios;
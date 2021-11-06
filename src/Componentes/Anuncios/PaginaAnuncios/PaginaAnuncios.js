import { useState, useEffect } from 'react';
import {traerAnuncios} from './servicios'
import './PaginaAnuncios.css';
import Disenio from '../../Disenio/Disenio';
import { Link } from 'react-router-dom';

const EstaVacio = () => (
  <div>
    <p> No hay anuncios que mostrar. Crea tu el primero</p>
    <Link to='adverts/new'>
    <button>
      Nuevo anuncio
    </button>
    </Link>
  </div>
);

function PaginaAnuncios ({estaRegistrado, onLogout}){
  const [anuncios, setAnuncios] = useState([]);
  const [tablaAnuncios, setTablaAnuncios] = useState([])
  const [filtroNombre, setFiltroNombre] = useState('');

    /*useEffect(()=> {
      traerAnuncios().then(adverts => setAnuncios(adverts));
    },[]);*/


    const busquedaNombre = evento => {
      setFiltroNombre(evento.target.value);
      filtrarPorNombre(evento.target.value);
    }

    const filtrarPorNombre = (palabra) => {
      let resultadosBusqueda = tablaAnuncios.filter((elemento) => {
        if(elemento.name.toString().toLowerCase().includes(palabra.toLowerCase())){
          return elemento;
        }
      })
    setAnuncios(resultadosBusqueda);
    };

    
    useEffect(()=> {
      traerAnuncios().then( response => {
        setAnuncios(response);
        setTablaAnuncios(response);
      }).catch(error => {
        console.log(error)
      })
    },[]);

    
    return (
      <Disenio title='Últimos anuncios' estaRegistrado = {estaRegistrado} onLogout={onLogout}>
        <div className='filtrosBusqueda'>
          <div className='filtroNombre'>
            <label>Filtrar por nombre</label>
            <input type='text'
            value = {filtroNombre} 
            onChange={busquedaNombre}></input>
          </div>
        </div>
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
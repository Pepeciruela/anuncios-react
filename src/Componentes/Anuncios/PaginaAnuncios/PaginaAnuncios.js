import { useState, useEffect } from 'react';
import {traerAnuncios} from './servicios'
import Disenio from '../../Disenio/Disenio';
import { Link } from 'react-router-dom';
import '../../../styles/boostrap.css'
import './PaginaAnuncios.css'

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
  const [error, setError] = useState(null);
  const [tablaAnuncios, setTablaAnuncios] = useState([])
  const [filtroNombre, setFiltroNombre] = useState('');
  const [filtroVenta, setFiltroVenta] = useState('');
  const [filtroTags, setFiltroTags] = useState('');
  const [filtroPrecioMin, setFiltroPrecioMin] = useState('');


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

    const busquedaPrecioMin = evento => {
      setFiltroPrecioMin(evento.target.value);
      filtrarPorPrecioMin(evento.target.value);
    }

    const filtrarPorPrecioMin = (palabra) => {
      let resultadosBusqueda = tablaAnuncios.filter((elemento) => {
        if(elemento.price >= palabra){
          return elemento;
        }
      })
    setAnuncios(resultadosBusqueda);
    }

    const busquedaVenta = evento => {
      setFiltroVenta(evento.target.value)
      filtrarPorVenta(evento.target.value);
    }

    const filtrarPorVenta = (palabra) => {
      let resultadosBusqueda = tablaAnuncios.filter((elemento) => {
        if(elemento.sale.toString().toLowerCase().includes(palabra)){
          return elemento;
        }
      })
      setAnuncios(resultadosBusqueda);
    }

    const busquedaTags = evento => {
      setFiltroTags(evento.target.value)
      filtroPorTags(evento.target.value)
    }

    const filtroPorTags = (palabra) => {
      let resultadosBusqueda = tablaAnuncios.filter((elemento) => {
        if(elemento.tags.toString().toLowerCase().includes(palabra)){
          return elemento;
        }
      })
      setAnuncios(resultadosBusqueda);
    }

    useEffect(()=> {
      traerAnuncios().then( response => {
        setAnuncios(response);
        setTablaAnuncios(response);
      }).catch(error => {
        console.log(error)
      })
    },[]);

    
    return (
      <Disenio estaRegistrado = {estaRegistrado} onLogout={onLogout}>
        
        <div className='filtro'>
          <div>
            <label className="col-form-label" for="inputDefault">Filtrar por nombre</label>
            <input type='text'
            className="form-control"
            value = {filtroNombre} 
            onChange={busquedaNombre}></input>
          </div>
          </div>


          <div className='filtro'>
            <div>
            <label className="col-form-label" for="inputDefault">Filtrar por precio mínimo</label>
            <input type='number'
            className="form-control"
            value = {filtroPrecioMin} 
            onChange={busquedaPrecioMin}></input>
          </div>
          </div>

          
          <div className='filtro'>
          <label className="form-check-label">Filtrar por compra o venta</label>
          <div>
            <input type="radio"
            className="form-check-input" 
            id="compra" 
            value="false" 
            name='drone'
            onChange={busquedaVenta}/>
            <label for="compra">Compra</label>
          </div>
          <div>
            <input type="radio"
            className="form-check-input"  
            id="venta"  
            name='drone' 
            value="true"
            onChange={busquedaVenta}/>
            <label for="venta">Venta</label>
          </div>
          <div>
            <input type="radio"
            className="form-check-input"  
            id="ambos" 
            name='drone' 
            value=""
            onChange={busquedaVenta}/>
            <label for="compraVenta">Compra y venta</label>
          </div>
          </div>

          <div className='filtro'>
          <label for="exampleSelect2">Filtrar por etiquetas</label>
                <select multiple
                class="form-select" 
                name='tags' 
                label='tags'
                onChange={busquedaTags}>
                    <option value='ninguno' onChange={busquedaTags}>Ninguna</option>
                    <option value='lifestyle' onChange={busquedaTags}>Lifestyle</option>
                    <option value='mobile' onChange={busquedaTags}>Mobile</option>
                    <option value='motor' onChange={busquedaTags}>Motor</option>
                    <option value='work' onChange={busquedaTags}>Work</option>
                </select>
          </div>

        <div className="jumbotron">
        <h1 className="display-3">Últimos anuncios</h1>
        {anuncios.length ? (
        <ul className="list-group">
        {anuncios.map(anuncio =>
        <div key={anuncio.id}>
          <Link to={`/adverts/${anuncio.id}`}>
            <li className="list-group-item list-group-item-action active">
              Nombre:
              <span class="badge bg-primary badge-pill">{anuncio.name}</span></li>
          </Link>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Precio: 
              <span className="badge bg-primary badge-pill">{anuncio.price}€</span></li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Tags: {anuncio.tags.map(tag => 
              <span className="badge bg-primary badge-pill">{tag}</span>)}</li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Estado:
              <span className="badge bg-primary badge-pill">{anuncio.sale ? 'En venta' : 'Se compra'}</span></li>
        <br></br>
        </div>
        )}
    </ul>
        ) : ( <EstaVacio/>)}
    </div>
      </Disenio>
    );

}

export default PaginaAnuncios;
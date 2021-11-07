import Disenio from '../../Disenio/Disenio';
import { useState } from 'react';
import{crearAnuncio} from '../PaginaAnuncios/servicios'
import {useHistory} from 'react-router-dom'
import '../../../styles/boostrap.css'
import './NuevoAnuncio.css'



function NuevoAnuncio (){

    const [value, setValue] = useState({
        name:'', 
        sale:true, 
        price:0, 
        tags:[''],
        photo:'',
    });

    const[error, setError] = useState('');
    const[anuncioCreado, setAnuncioCreado] = useState('');
    const history = useHistory();

    const cambiarEstado = evento => {
        setValue(estadoPrevio => ({
            ...estadoPrevio,
            [evento.target.name]:evento.target.value
        }))
    }

    const enviarFormulario = async evento => {
        const formulario = new FormData(evento.target);
        evento.preventDefault();
        try{
            const nuevoAnuncio = await crearAnuncio(formulario);
            setAnuncioCreado(nuevoAnuncio.id)
            return history.push(`/adverts/${anuncioCreado}`);
        } catch (error){
            setError(error)
        }
    }

    return(
        <Disenio>
            <div class="jumbotron">
            <h1 className="display-3">Crear un nuevo anuncio</h1>
            <div class="form-group">
                <form onSubmit = {enviarFormulario}>
                
                <div className='item'>
                <label>Producto</label>
                <input type='text'
                className="form-control" 
                name='name' 
                label='nombre'
                value={value.name}
                onChange={cambiarEstado}
                placeholder='Escribe el nombre del producto'
                required
                autoFocus></input>
                </div>
                <div className='item'>
                <label>Compra o venta</label>
                <select 
                name='sale' 
                label='venta'
                className="form-select"
                value={value.sale}
                onChange={cambiarEstado}
                required>
                    <option value='true'> Compra </option>
                    <option value='false'>Venta</option>
                </select>
                </div>
                <div className='item'>
                <label>Precio</label>
                <input type='number' 
                name='price' 
                label='precio'
                className="form-control"
                value={value.price}
                onChange={cambiarEstado}
                min='1'
                required></input>
                </div>
                <div className='item'>
                <label>Tags</label>
                <select multiple='' 
                name='tags' 
                label='tags'
                className="form-select"
                value={value.tags}
                onChange={cambiarEstado}
                required>
                    <option value='lifestyle'>Lifestyle</option>
                    <option value='mobile'>Mobile</option>
                    <option value='motor'>Motor</option>
                    <option value='work'>Work</option>
                </select>
                </div>
                <div className='item'>
                <label>Fotografía</label>
                <input type='file'
                class="form-control" 
                name='photo' 
                label='foto'></input>
                </div>
                <div className='item'>
                <button 
                type='submit'
                className="btn btn-primary">Crear</button>
                </div>
                </form>
            </div>
            </div>
        </Disenio>
    );
}

export default NuevoAnuncio;
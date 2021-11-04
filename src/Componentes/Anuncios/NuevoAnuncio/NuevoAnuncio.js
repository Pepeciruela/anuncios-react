import Disenio from '../../Disenio/Disenio';
import { useState } from 'react';
import{crearAnuncio} from '../PaginaAnuncios/servicios'

function NuevoAnuncio (){

    const [value, setValue] = useState({name:'', sale:true, price:0, tags:[''] });
    const [file, setFile] = useState(null)


    const cambiarEstado = evento => {
        setValue(estadoPrevio => ({
            ...estadoPrevio,
            [evento.target.name]:evento.target.value
        }))
    }

    const cambiarFile = evento => {
        evento.preventDefault();
        setFile(estadoPrevio => ({
            ...estadoPrevio,
            [evento.target.name]:evento.target.files[0]
        }))
    }

    const enviarFormulario = async evento => {
        evento.preventDefault();
        try{
            await crearAnuncio(value, file)
        } catch (error){

        }
        


    }

    return(
        <Disenio title ='Crea un nuevo anuncio'>
            <div>Nuevo Anuncio</div>
            <div>
                <form onSubmit = {enviarFormulario}>
                <label>Producto</label>
                <input type='text' 
                name='name' 
                label='nombre'
                value={value.name}
                onChange={cambiarEstado}
                placeholder='Escribe el nombre del producto'
                required
                autoFocus></input>

                <label>Compra o venta</label>
                <select 
                name='sale' 
                label='venta'
                value={value.sale}
                onChange={cambiarEstado}
                required>
                    <option value='true'> Compra </option>
                    <option value='false'>Venta</option>
                </select>

                <label>Precio</label>
                <input type='number' 
                name='price' 
                label='precio'
                value={value.price}
                onChange={cambiarEstado}
                min='1'
                required></input>

                <label>Tags</label>
                <select multiple='' 
                name='tags' 
                label='tags'
                value={value.tags}
                onChange={cambiarEstado}
                required>
                    <option value='lifestyle'>Lifestyle</option>
                    <option value='mobile'>Mobile</option>
                    <option value='motor'>Motor</option>
                    <option value='work'>Work</option>
                </select>

                <label>Fotografía</label>
                <input type='file' 
                name='photo' 
                label='foto'
                value={file}
                onChange={cambiarFile}></input>

                <button 
                type='submit'>Crear</button>
                </form>
            </div>
        </Disenio>
    );
}

export default NuevoAnuncio;
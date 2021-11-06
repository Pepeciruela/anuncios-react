import React from 'react';
import {useHistory} from 'react-router-dom'
import Disenio from '../../Disenio/Disenio';
import {traerAnuncio, borrarAd} from '../PaginaAnuncios/servicios'
import logo from '../../../images/logo.png'
import swal from 'sweetalert'
import {useState, useEffect} from 'react';

function PaginaAnuncio({match}) {
    const [anuncio, setAnuncio] = useState([]);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(()=> {
        traerAnuncio(match.params.id).then(anuncio => setAnuncio(anuncio));
    }, [match.params.id]);

    const borrarAnuncio = evento => {
        evento.preventDefault();
        const borrar = match.params.id
        try{
            swal({
                title: 'Eliminar',
                text: '¿Estás seguro de que deseas eliminar este anuncio?',
                buttons: ['No', 'Yes']
            }).then(respuesta => {
                if(respuesta){
                    borrarAd(borrar);
                    swal({text:'Su archivo ha sido borrado con éxito'});
                    return history.push('/adverts/');
                } else{
                    swal({text:'Su archivo no ha sido borrado'})
                }
            })
        } catch(error){
            setError(error)
        }
    }

    return (
        <Disenio>
                <div> Anuncio </div>
                <div key={anuncio.id}>
                    <h2>{anuncio.name}</h2>
                    <p>Precio: {anuncio.price}</p>
                    <p> Tags: {anuncio.tags}</p>
                    <p>{anuncio.sale ? 'En venta' : 'Se compra'}</p>
                    {anuncio.photo ? <img src = {`http://localhost:3001${anuncio.photo}`} ></img> : <img src={logo}></img>}
                    <button onClick={borrarAnuncio}>Borrar anuncio</button>
                </div>
        </Disenio>
    )
    }





export default PaginaAnuncio;
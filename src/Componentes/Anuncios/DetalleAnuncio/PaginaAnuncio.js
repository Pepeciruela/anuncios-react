import React from 'react';
import {useHistory} from 'react-router-dom'
import Disenio from '../../Disenio/Disenio';
import {traerAnuncio, borrarAd} from '../PaginaAnuncios/servicios'
import logo from '../../../images/logo.png'
import swal from 'sweetalert'
import {useState, useEffect} from 'react';
import './PaginaAnuncio.css'
import '../../../styles/boostrap.css'

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
            <div className="card mb-3">
                <div className="card-header" key={anuncio.id}>
                    <h2 className="card-header">{anuncio.name}</h2>
                    <h4 className="card-subtitle text-muted">Precio: {anuncio.price}</h4>
                    <h4 className="card-subtitle text-muted"> Tags: {anuncio.tags}</h4>
                    <h4 className="card-subtitle text-muted">{anuncio.sale ? 'En venta' : 'Se compra'}</h4>
                    {anuncio.photo ? <img src = {`http://localhost:3001${anuncio.photo}`} className="d-block user-select-none" ></img> : <img src={logo} className="d-block user-select-none"></img>}
                    <button onClick={borrarAnuncio} className="btn btn-danger">Borrar anuncio</button>
                </div>
                
            </div>
        </Disenio>
    )
    }





export default PaginaAnuncio;
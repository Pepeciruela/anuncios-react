import React from 'react';
import { Redirect } from 'react-router';
import Disenio from '../../Disenio/Disenio';
import {traerAnuncio, borrarAd} from '../PaginaAnuncios/servicios'
import logo from '../../../images/logo.png'
import swal from 'sweetalert'
import {useState, useEffect} from 'react';



/*class PaginaAnuncio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anuncio: [],
            error: null,
            cargando: false,
        };
    }

    componentDidMount(){
        this.setState({cargando:true})
        const{match} = this.props;
        traerAnuncio(match.params.id)
        .then(anuncio => this.setState({anuncio:anuncio, cargando:false}))
        .catch(error => this.setState({error}))
    }

    borrarAnuncio = evento => {
        const{match} = this.props;
        evento.preventDefault();
        try{
            swal({
                title: 'Eliminar',
                text: '¿Estás seguro de que deseas eliminar este anuncio?',
                icon: 'Warning',
                buttons: ['No', 'Yes']
            }).then(respuesta => {
                if(respuesta){
                    borrarAd(match.params.id);
                    swal({text:'Su archivo ha sido borrado con éxito'})
                }
            })
            
        } catch(error){
            console.log(error)
        }
    }

    render(){
        const {anuncio, error, cargando} = this.state;

        if(error && error.status === 404){
            return <Redirect to='/404'/>;
        }

        if(cargando){
            return <p>Cargando anuncio...</p>
        }

        return(
            <Disenio>
                <div> Anuncio </div>
                <div key={anuncio.id}>
                    <h2>{anuncio.name}</h2>
                    <p>Precio: {anuncio.price}</p>
                    <p> Tags: {anuncio.tags}</p>
                    <p>{anuncio.sale ? 'En venta' : 'Se compra'}</p>
                    {anuncio.photo ? <img src = {`http://localhost:3001${anuncio.photo}`} ></img> : <img src={logo}></img>}
                    <button onClick={this.borrarAnuncio}>Borrar anuncio</button>
                </div>
            </Disenio>
        )
    }
}*/

function PaginaAnuncio({match}) {
    const [anuncio, setAnuncio] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(false);

    useEffect(()=> {
        traerAnuncio(match.params.id).then(anuncio => setAnuncio(anuncio));
    }, [match.params.id]);

    const borrarAnuncio = async evento => {
        evento.preventDefault();
        const borrar = match.params.id
        try{
            await borrarAd(borrar)
            /*swal({
                title: 'Eliminar',
                text: '¿Estás seguro de que deseas eliminar este anuncio?',
                icon: 'Warning',
                buttons: ['No', 'Yes']
            }).then(respuesta => {
                if(respuesta){
                    borrarAd(match.params.id);
                    swal({text:'Su archivo ha sido borrado con éxito'})
                } else{
                    swal({text:'Su archivo no ha sido borrado'})
                }
            })*/
            
        } catch(error){
            console.log(error)
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
import React from 'react';
import { Redirect } from 'react-router';
import Disenio from '../../Disenio/Disenio';
import {traerAnuncio} from '../PaginaAnuncios/servicios'


class PaginaAnuncio extends React.Component {
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
                    <img src = {`http://localhost:3001${anuncio.photo}`} ></img>
                </div>
            </Disenio>
        )
    }
}

/*function PaginaAnuncio({match}) {
    const [anuncio, setAnuncio] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(false);

    useEffect(()=> {
        traerAnuncio(match.params.id).then(anuncio => setAnuncio(anuncio));
    }, [match.params.id]);

    console.log(anuncio);

    return (
        <Disenio>
            <div>Anuncio {match.params.id}</div>
            <p></p>
            <p>{JSON.stringify(anuncio.name)}</p>
        </Disenio>
    )
    }*/





export default PaginaAnuncio;
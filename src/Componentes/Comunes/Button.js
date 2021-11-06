import {Route} from 'react-router-dom'

const ButtonHome = () => (
<Route render = {({history}) => (
    <button
    type='button'
    onClick = {() => {history.push('/adverts')}}> Enviar </button>
)}/>
);

export default ButtonHome;
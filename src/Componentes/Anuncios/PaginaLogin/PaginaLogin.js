import { useState } from 'react';
import {login} from './servicios'

function PaginaLogin({onLogin}){
    const [value, setValue] = useState({email:'', password:''});
    const [error, setError] = useState(null);
    const resetearError = () => setError(null);
    const [cargando, setCargando] = useState(false);

    const eventoCambio = evento => {
        setValue(estadoPrevio => ({
            ...estadoPrevio,
            [evento.target.name]:evento.target.value
        }))
    };

    const controlarSubmit = async evento => {
        evento.preventDefault();
        setCargando(true);
        try{
            await login(value);
            onLogin();
        } catch (error) {
            setError(error);
        } finally{
            setCargando(false);
        }
        
    };

    return (   
    <div className='paginalogin'>
    <h1 className='paginalogin-titulo'> Accede a Nodepop</h1>
    <form onSubmit={controlarSubmit}>
        <input type='text' 
        name='email' 
        label='Email'
        value={value.email}
        onChange={eventoCambio}></input>

        <input type='password' 
        name='password'
        label = 'Password'
        value={value.password}
        onChange={eventoCambio}></input>

        <button 
        type='submit' 
        disabled={cargando || !value.email || !value.password}>Acceder</button>
    </form>
    {error && (
    <div onClick={resetearError}> 
        {error.message} 
    </div>
    )}
    </div>
    )
};

export default PaginaLogin;
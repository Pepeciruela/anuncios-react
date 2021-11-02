import { useState } from 'react';
import {login} from './servicios'

function PaginaLogin({onLogin}){
    const [value, setValue] = useState({email:'', password:''});
    const [error, setError] = useState(null);
    const resetearError = () => setError(null);
    const [cargando, setCargando] = useState(false);
    const [checkbox, setCheckbox] = useState(false);

    const usuarioRecordado = () => {
        const recuerdame = localStorage.getItem('recuerdame') === 'true';
        const usuario = recuerdame ? localStorage.getItem('usuario') : '';
        const password = recuerdame ? localStorage.getItem('password') : '';
        this.setState({ usuario, password, recuerdame });
      };

    const eventoCambio = evento => {
        setValue(estadoPrevio => ({
            ...estadoPrevio,
            [evento.target.name]:evento.target.value
        }))
    };

    const cambioCheckbox = evento => {
        setCheckbox(evento.target.checked);
    };
    

    const controlarSubmit = async evento => {
        evento.preventDefault();
        setCargando(true);
        if(checkbox === true){
            localStorage.setItem('recuerdame', true)
            try{
                await login(value);
                localStorage.setItem('email', value.email);
                localStorage.setItem('password', value.password);
                setCargando(false);
                onLogin();
            } catch (error) {
                setError(error);
                setCargando(false);
            }
        } else {
            try{
                await login(value);
                setCargando(false);
                onLogin();
            } catch (error) {
                setError(error);
                setCargando(false);
            }
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

        <input type='checkbox'
        name='checkbox'
        onChange={cambioCheckbox}></input>

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
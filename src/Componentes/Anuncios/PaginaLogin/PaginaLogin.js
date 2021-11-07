import { useState } from 'react';
import {login, loginTemporal} from './servicios'
import '../../../styles/boostrap.css'
import './PaginaLogin.css'

function PaginaLogin({onLogin}){
    const [value, setValue] = useState({email:'', password:''});
    const [error, setError] = useState(null);
    const resetearError = () => setError(null);
    const [cargando, setCargando] = useState(false);
    const [checkbox, setCheckbox] = useState(false);

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
                setCargando(false);
                onLogin();
            } catch (error) {
                setError(error);
                setCargando(false);
            }
        } else {
            try{
                await loginTemporal(value);
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
    <div className='item'>
    <label>Email</label>
        <input type='text' 
        className="form-control"
        name='email' 
        label='Email'
        value={value.email}
        autoFocus
        onChange={eventoCambio}></input>
        </div>

        <div className='item'>
        <label>Password</label>
        <input type='password'
        className="form-control" 
        name='password'
        label = 'Password'
        value={value.password}
        onChange={eventoCambio}></input>
        </div>
        
        <div className='item'>
        <label class="form-check-label">Recuerdame</label>
        <input type='checkbox'
        id="flexCheckDefault"
        className="form-check-input"
        name='checkbox'
        onChange={cambioCheckbox}></input>
        </div>

        <div className='item'>
        <button 
        type='submit'
        className="btn btn-primary" 
        disabled={cargando || !value.email || !value.password}>Acceder</button>
        </div>
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
import React from 'react';
import Header from './Header';
import '../../styles/boostrap.css'
import './Disenio.css'

function Disenio({children, title, ...props}){
    return (
        <div className='disenio'>
        <Header {...props}/>
        <main>
            <h2>{title}</h2>
            <section>{children}</section>
        </main>
        <footer>
            <hr className="my-4"/>
            <p className='lead'>Nodepop 2021</p>
        </footer>

        </div>
    );

};

export default Disenio;
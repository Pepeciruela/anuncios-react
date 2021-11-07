import React from 'react';
import Header from './Header';
import '../../styles/boostrap.css'

function Disenio({children, title, ...props}){
    return (
        <div className='disenio'>
        <Header {...props}/>
        <main>
            <h2>{title}</h2>
            <section>{children}</section>
        </main>
        <footer>Nodepop 2021</footer>

        </div>
    );

};

export default Disenio;
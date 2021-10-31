import classNames from 'classnames'


function Header({className, estaRegistrado}){
    return(<header className={classNames('header', className)}>
        <div className='header-logo'></div>
        <nav className='header-nav'>
            {estaRegistrado ?
                <button className='header-button'>
                    Log out
                </button>
                :
                <button className='header-button'>
                    Log in
                </button>
            }
            </nav>
            
    </header>);
}

export default Header;
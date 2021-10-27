import classNames from 'classnames'


function Header({className}){
    return(<header className={classNames('header', className)}>
        <div className='header-logo'></div>
        <nav className='header-nav'><button className='header-button'></button></nav>
    </header>);
}

export default Header;
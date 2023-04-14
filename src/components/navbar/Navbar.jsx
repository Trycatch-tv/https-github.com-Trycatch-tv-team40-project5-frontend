import React from 'react'
import Logo from '../../assets/Logo.svg'
import './navbar.css'

function Navbar() {
    return (
        <nav className='nav'>

            <a href='#'><img className='nav-img' src={Logo} alt="Logo" /></a>
            <input type="text" className='nav-input' placeholder='Encuentra tu mesa aqui' />
            <div className='nav-btns'>
                <button className='nav-btn--reserve'>Reserva Ya!</button>
                <button className='nav-btn--session'>Iniciar Sesion</button>
            </div>
        </nav>
    )
}

export default Navbar
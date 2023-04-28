import React, { useState } from 'react'
import Logo from '../../assets/Logo.svg'
import './navbar.css'

import Modal from '../Modals/Modal';
import AccessTable from '../access-table/AccessTable';

function Navbar() {

    const [show, setShow] = useState(false);

    return (
        <nav className='nav'>
            <a href='#'><img className='nav-img' src={Logo} alt="Logo" /></a>
            <input type="text" className='nav-input' placeholder='Encuentra tu mesa aqui' onClick={ () => setShow(true) } />
            <Modal  isOpen = { show } onClose = { () => setShow(false) } >
                <AccessTable />
            </Modal>
            <div className='nav-btns'>
                <button className='nav-btn--reserve'>Reserva Ya!</button>
                <button className='nav-btn--session'>Iniciar Sesion</button>
            </div>
        </nav>
    )
}

export default Navbar
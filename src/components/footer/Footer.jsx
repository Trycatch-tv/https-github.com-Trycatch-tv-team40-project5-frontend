import React from 'react'
import LogoWhite from '../../assets/logo-white.svg'
import './footer.css'

function Footer() {
    return (
        <footer>
            <div className='footer-headers'>
                <a href='#'><img className='footer-img' src={LogoWhite} alt="Logo" /></a>
                <p>Información de la empresa</p>
                <p>Ayuda</p>
            </div>
            <div className='footer-body'>
                <p>Contactanos</p>
                <div className='footer-body--info'>
                    <p className='footer-links'>Sobre Nosotros</p>
                    <p className='footer-links'>Programa afiliado</p>
                    <p className='footer-links'>Responsabilidades sociales</p>
                </div>
                <div className='footer-body--help'>
                    <p className='footer-links'>Contactanos</p>
                    <p className='footer-links'>Estado del pedido</p>
                    <p className='footer-links'>Información del pedido</p>
                </div>
            </div>
            <hr />
        </footer>
    )
}

export default Footer
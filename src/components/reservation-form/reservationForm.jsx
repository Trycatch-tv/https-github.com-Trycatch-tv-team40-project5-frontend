import React from 'react'
import './reservationForm.css'


function reservationForm() {
    return (
        <article>
        <form action='' className='form-card'>
            <h2 className='subtitle-two'>HAS TU RESERVACIÓN</h2>
            <hr/>
            <label htmlFor='info-cliente'>
                <input type="text" name='names' id='names' placeholder='Nombres y Apellido'/>
                <hr/>
                <input type="text" name='document' id='document' placeholder='Numero de documento' />
                <hr/>
            </label>
        
            <section className='sec-two'>
            <label className='sub-form'>
                <div>
                <h3>Fecha</h3>
                <input type="date" className='place-info-date' />
                </div>
                <hr/>
                <div>
                <h3>Hora</h3>
                <input type="time" className='place-info-time'/>
                </div>
                <hr/>
                <div>
                <h3>Tamaño</h3>
                <input type="text" name='persons' placeholder='2 personas' className='place-info-person'/>
                </div>
            </label>
            </section>
            <hr/>
            <label htmlFor="send" className='container-btn'>
                <input type="submit" value='Reservar' className='btn-reserva' />
            </label>
        </form>
        </article>
    )
}

export default reservationForm
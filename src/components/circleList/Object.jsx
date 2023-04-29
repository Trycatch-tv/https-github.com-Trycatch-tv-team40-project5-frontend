import React, { useState } from 'react';
import './Object.css';

function Object({id, dispo, handleClick}) {
return (
    <section className='free-occupied'>
    <div
        className={`Object ${dispo ? 'free' : 'occupied'}`}
        onClick={handleClick(id)}
    >
        {dispo ? 'Libre' : 'Ocupado'}
    </div>
    </section>
    );
}

export default Object;


import React, { useState } from 'react';
import './Object.css';

function Object() {
    const [isFree, setIsFree] = useState(true);

    const handleClick = () => {
        setIsFree(!isFree);
};

return (
    <section className='free-occupied'>
    <div
        className={`Object ${isFree ? 'free' : 'occupied'}`}
        onClick={handleClick}
    >
        {isFree ? 'Libre' : 'Ocupado'}
    </div>
    </section>
    );
}

export default Object;


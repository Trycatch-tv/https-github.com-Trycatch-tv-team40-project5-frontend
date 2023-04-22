import React, { useState } from 'react';
import Object from '../circleList/Object';

function ObjectList() {
const [objects, setObjects] = useState([
    { id: 1, isFree: true },
    { id: 2, isFree: false },
    { id: 3, isFree: true },
]);

const handleAddObject = () => {
    const newObject = { id: objects.length + 1, isFree: true };
    setObjects([...objects, newObject]);
};

const handleRemoveObject = (id) => {
    const newObjects = objects.filter((object) => object.id !== id);
    setObjects(newObjects);
};

return (
    <div className='container-circle'>
        <button className='add-btn' onClick={handleAddObject}>Agregar objeto</button>
        {objects.map((object) => (
        <Object
            key={object.id}
            isFree={object.isFree}
            onClick={() => handleRemoveObject(object.id)}
        />
        ))}
    </div>
    );
}

export default ObjectList;

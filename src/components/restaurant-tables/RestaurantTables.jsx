import React, { useState } from 'react';
import Object from '../circleList/Object';
import "./RestaurantTables.css";

const mesas = [
    {
      id: 1,
      disponibilidad: true,
    },
    {
      id: 2,
      disponibilidad: false,
    },
    {
      id: 3,
      disponibilidad: true,
    },
    {
      id: 4,
      disponibilidad: false,
    },
  ];

function ObjectList() {
const [tables, setTables] = useState(
    mesas
);

const handleClick = (key) => {
    console.log(key);
    /*tables.map((table) => {
        if (table.id === key) {
            table.disponibilidad =!table.disponibilidad;
        }
    })*/
};

return (
    <div className='container-circle'>
        
        
        {tables.map(table => (
            <Object
                id={table.id}
                key={table.id}
                dispo={table.disponibilidad}
                handleClick={handleClick}
            />))}
    </div>
)
}

export default ObjectList;

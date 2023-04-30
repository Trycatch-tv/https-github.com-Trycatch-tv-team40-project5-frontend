import React from "react";
import "./ListTable.css";

function ListTable({ deleteUser, editUser, reservations }) {
  return (
    <table>
      <thead className="row-header">
        <tr className="row-header">
          <th># Mesa</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Personas</th>
          <th>Nombre y Apellido</th>
          <th>Documento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation) => {
          return (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.people}</td>
              <td>{reservation.name}</td>
              <td>{reservation.document}</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => editUser(reservation)}
                >
                  Editar
                </button>
                <button
                  className="btn-delete"
                  onClick={() => {
                    deleteUser(reservation.id);
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListTable;

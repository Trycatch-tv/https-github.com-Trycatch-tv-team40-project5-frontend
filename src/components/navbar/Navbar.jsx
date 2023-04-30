import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.svg";
import "./navbar.css";
import Modal from "../Modals/Modal";
import ListTable from "../list-table/ListTable";
import { Link } from "react-router-dom";

const reservations = [
  {
    id: 1,
    date: "2017-06-01",
    time: "12:00",
    people: 4,
    name: "Jose Perez",
    document: 123,
  },
  {
    id: 2,
    date: "2017-06-01",
    time: "12:00",
    people: 3,
    name: "Manuel Urina",
    document: 222,
  },
  {
    id: 3,
    date: "2017-06-01",
    time: "12:00",
    people: 2,
    name: "Juan Rosero",
    document: 333,
  },
  {
    id: 4,
    date: "2017-06-01",
    time: "12:00",
    people: 2,
    name: "Santiago Montoya",
    document: 444,
  },
  {
    id: 5,
    date: "2017-06-01",
    time: "12:00",
    people: 2,
    name: "Felipe Torres",
    document: 555,
  },
];

function Navbar() {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState(reservations);
  const [filterName, setFilterName] = useState(null);
  const [filterDocument, setFilterDocument] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const filterUsers = filterName
    ? users.filter((user) =>
        user.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : filterDocument
    ? users.filter((user) =>
        user.document.toString().includes(filterDocument.toString())
      )
    : users;

  const handleClickModal = () => {
    setShow(true);
    setUsers(reservations);
  };

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const handleEdit = (reservation) => {
    setEditUser(reservation);
    setShowEdit(true);
  };

  const handleClose = () => {
    setShow(false);
    setShowEdit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const time = e.target.time.value;
    const people = e.target.people.value;

    users.map((user) => {
      if (user.id === editUser.id) {
        user.date = date;
        user.time = time;
        user.people = people;
      }
    });

    console.log(users);
    //editReservation()
    setShowEdit(false);
    setFilterDocument(null);
    setFilterName(null);
    setEditUser(null);
  };

  return (
    <nav className="nav">
      <a href="#">
        <img className="nav-img" src={Logo} alt="Logo" />
      </a>
      <input
        type="text"
        className="nav-input"
        placeholder="Encuentra tu mesa aqui"
        onClick={handleClickModal}
      />
      <Modal isOpen={show} onClose={handleClose}>
        <div>
          {showEdit ? (
            <form action="" onSubmit={handleSubmit}>
              <h3 className="title-access">Edicion de mesa: #{editUser.id}</h3>
              <div className="container-form">
                <div className="inputs-time">
                  <label>
                    Fecha
                    <input
                      id="date"
                      type="date"
                      defaultValue={editUser.date}
                      //onChange={handleChange}
                    />
                  </label>

                  <label>
                    Hora
                    <input
                      id="time"
                      type="time"
                      defaultValue={editUser.time}
                      //onChange={handleChange}
                    />
                  </label>
                  <label>
                    Personas
                    <input
                      type="text"
                      id="people"
                      defaultValue={editUser.people}
                      placeholder="Personas"
                      //onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="inputs-user">
                  <label>
                    Nombres
                    <input
                      type="text"
                      id="name"
                      placeholder="Nombre y apellido"
                      defaultValue={editUser.name}
                    />
                  </label>

                  <label>
                    Num Documento
                    <input
                      type="number"
                      id="document"
                      placeholder="N° de documento"
                      defaultValue={editUser.document}
                    />
                  </label>
                </div>
              </div>
              <button type="submit" className="btn-submit-edit">
                Enviar
              </button>
            </form>
          ) : (
            <>
              <h3 className="title-access">Rapido Acceso a las mesas</h3>
              {/* <div className="container-form-list"> */}
              <div className="inputs-user-search container-form">
                <input
                  type="text"
                  placeholder="Nombre y apellido"
                  onChange={(e) => {
                    setFilterName(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="N° de documento"
                  onChange={(e) => {
                    setFilterDocument(e.target.value);
                  }}
                />
                {/* </div> */}
              </div>
              <ListTable
                editUser={handleEdit}
                deleteUser={handleDelete}
                reservations={filterUsers}
              />
            </>
          )}
        </div>
      </Modal>
      <div className="nav-btns">
        <button className="nav-btn--reserve">
          <Link className="nav-link" to="/reservation">
            Reserva Ya!
          </Link>
        </button>
        <button className="nav-btn--session">Iniciar Sesion</button>
      </div>
    </nav>
  );
}

export default Navbar;

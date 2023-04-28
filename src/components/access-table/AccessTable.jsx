import "./AccessTable.css";

const AccessTable = () => {
  return (
    <div>
      <h3 className="title-access">Rapido Acceso a las mesas</h3>
      <div className="container-form">
        <div className="inputs-time">
          <input type="date" />
          <input type="time" />
          <input type="text" placeholder="2 Personas" />
        </div>
        <div className="inputs-user">
          <input type="text" placeholder="Nombre y apellido" />
          <input type="number" placeholder="N° de documento" />
        </div>
      </div>
    </div>
  );
};

export default AccessTable;

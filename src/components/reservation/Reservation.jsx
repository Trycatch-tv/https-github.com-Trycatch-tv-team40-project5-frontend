import React from "react";
import RestaurantTables from "../restaurant-tables/RestaurantTables";
import ReservationForm from "../reservation-form/ReservationForm";
import "./reservation.css";

function Reservation() {
  return (
    <>
      <section className="container-banner"></section>
      <section className="container-card">
        <div className="container-tables">
          <RestaurantTables />
        </div>

        <div className="container-form">
          <ReservationForm />
        </div>
      </section>
      <section className="information">
        <h2 className="subtitle-2">¡IMPORTANTE!</h2>

        <div className="circles">
          <div className="green-circle"></div>
          <p className="text">
            Sí se encuentra este color significa que esta{" "}
            <strong> LIBRE.</strong>
          </p>

          <div className="red-circle"></div>
          <p className="text">
            Sí se encuentra este color significa que esta{" "}
            <strong>OCUPADO.</strong>
          </p>
        </div>
      </section>
    </>
  );
}

export default Reservation;

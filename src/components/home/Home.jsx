import React from "react";
import RestaurantTargets from "../restaurant-targets/RestaurantTargets";
import SponsorBrands from "../sponsor-brands/SponsorBrands";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <h2 className="subtitle">¡Los mas elegidos!</h2>
      <div className="targets">
        <RestaurantTargets />
        <RestaurantTargets />
        <RestaurantTargets />
        <RestaurantTargets />
        <RestaurantTargets />
      </div>
      <h2 className="subtitle subtitle-2">Nuestras marcas aliadas</h2>
      <div className="sponsors targets">
        <SponsorBrands />
        <SponsorBrands />
        <SponsorBrands />
        <SponsorBrands />
        <SponsorBrands />
      </div>
    </div>
  );
}

export default Home;

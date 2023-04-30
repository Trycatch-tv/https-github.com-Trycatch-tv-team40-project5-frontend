import React from "react";
import RestaurantTargets from "../restaurant-targets/RestaurantTargets";
import SponsorBrands from "../sponsor-brands/SponsorBrands";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;

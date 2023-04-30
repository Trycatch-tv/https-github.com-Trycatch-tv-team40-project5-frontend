import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Reservation from "./components/reservation/Reservation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <main>
      <Home />
      <Reservation />
    </main>
    <Footer />
  </>
);

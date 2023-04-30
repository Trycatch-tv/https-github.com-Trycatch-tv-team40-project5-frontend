import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <main>
      <Home />
    </main>
    <Footer />
  </>
);

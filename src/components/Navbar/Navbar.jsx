import React from "react";
import "./Navbar.css";
import Burger from "./Burger/burger";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Magnate21</div>
      <Burger />
    </div>
  );
};

export default Navbar;
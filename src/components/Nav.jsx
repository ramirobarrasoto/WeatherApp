import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";
import img from "../img/cloud.png";

function Nav({ onSearch }) {
  return (
    <div className="navBar">
      <nav className="navbar navbar-dark bg-dark navBar" >
        <Link to="/">
          <span className="navbar-brand">
            <img
              id="logo"
              src={img}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Imagen no encontrada"
            />
            Weather App
          </span>
        </Link>
        <Link to="/about">
          <span>About Me</span>
        </Link>
        {/* <div className="hola"> */}
          <SearchBar onSearch={onSearch} />
        {/* </div> */}
      </nav>
    </div>
  );
}

export default Nav;

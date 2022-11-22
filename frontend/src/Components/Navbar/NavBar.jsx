import React from "react";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import { FaPlusCircle } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-title">
          <Link to="/" className="navbar-brand mb-1">
            CRUD: Laravel/React
          </Link>
        </div>
        <div className="button__container">
          <Link to="/todos/add">
            <FaPlusCircle className="icon__style" />
          </Link>
        </div>
        <Filter />
      </div>
    </nav>
  );
}

export default NavBar;

import React from "react";

import logo from "../images/soccer-logo.jpg";
import "./styles/Navbar.css";

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <h1>Copas Mundiales</h1>
          </Link>
        </div>
      </div>
    );
  }
}
export default Navbar;

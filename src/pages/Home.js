import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import cupLogoImage from "../images/soccer-ball.jpg";
import decorationImage from "../images/soccer-decoration.jpg";

import "bootstrap/dist/css/bootstrap.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={cupLogoImage}
                alt="Soccer ball Logo"
                className="img-fluid mb-2 Home__soccer-logo"
              />

              <h1>Campeones</h1>
              <Link className="btn btn-primary" to="/cups">
                Inicio
              </Link>
            </div>

            <div className="Home__col col-md-8">
              <img
                src={decorationImage}
                alt="Decoration"
                className="img-fluid p-4 Home__soccer-decoration"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

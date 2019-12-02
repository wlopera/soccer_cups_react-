import React from "react";

import "./styles/Cups.css";

import cupsLogo from "../images/soccer-ball.jpg";

class Cups extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Cups">
          <div className="Cups__hero">
            <div className="Cups__containers">
              <img className="Cups_conf-logo" src={cupsLogo} alt="Copas Logo" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cups;

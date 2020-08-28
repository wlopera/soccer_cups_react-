import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./styles/Cups.css";
import cupsLogo from "../images/soccer-ball.jpg";
import { connect } from "react-redux";
import { getCups, getCupByYear, createCup, deleteCup, updateCup } from "../actions/index";

class Cups extends React.Component {
  componentDidMount() {
    // Consultar todos los registros
    // this.props.getCups();
    // Consultar regustro por annio
    // this.props.getCupByYear("1986");
    // Agregar registro - copa
  }

  addCup = () => {
    const body = {
      id: "22",
      headquarter: "España",
      year: "2022",
      champion: "Venezuela",
      score: "2-1",
      subChampion: "Argentina",
    };
    this.props.createCup(body);
  };

  showCups = () => {
    this.props.getCups();
  };

  removeCup = () => {
    this.props.deleteCup("2022");
  };

  updateCup = () => {
    const body = {
      id: "22",
      headquarter: "Japón",
      year: "2022",
      champion: "Venezuela",
      score: "1.0",
      subChampion: "Brasil",
    };
    this.props.updateCup(body);
  };

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
        <div className="container" style={{ marginTop: 50 }}>
          <button onClick={this.addCup}>Agregar</button>
          <button onClick={this.updateCup}>Modificar</button>
          <button onClick={this.removeCup}>Eliminar</button>
          <button onClick={this.showCups}>Mostrar</button>
          {this.props.cups.length > 0 && (
            <BootstrapTable
              striped
              hover
              keyField="id"
              data={this.props.cups}
              columns={this.props.columns}
              pagination={paginationFactory(this.props.options)}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    ...store,
  };
};

const mapDispatchToProps = {
  getCups,
  getCupByYear,
  createCup,
  deleteCup,
  updateCup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cups);

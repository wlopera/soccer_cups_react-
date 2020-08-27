import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./styles/Cups.css";
import cupsLogo from "../images/soccer-ball.jpg";
import { connect } from "react-redux";
import { getCups } from "./actions";

class Cups extends React.Component {
  // getCups = () => {
  //   this.props.getCups();
  // };

  componentDidMount() {
    // Consultar todos los registros
    this.props.getCups();
    // Consultar regustro por annio
    // cupStore.getCupByYear("1986");
    // Agregar registro
    // const body = {
    //   id: "22",
    //   headquarter: "España",
    //   year: "2022",
    //   champion: "Venezuela",
    //   score: "2-1",
    //   subChampion: "Argentina",
    // };
    // cupStore.createCup(body);
    // Actualizar registro
    // const body = {
    //   id: "22",
    //   headquarter: "España",
    //   year: "2022",
    //   champion: "Venezuela",
    //   score: "1-0",
    //   subChampion: "Brasil",
    // };
    // cupStore.createCup(body);
    // Borrar registro
    // cupStore.deleteCup("2022");
  }

  render() {
    console.log(11, this.props);

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
    cups: store.cups,
    columns: store.columns,
    options: store.options,
  };
};

const mapDispatchToprops = {
  getCups,
};

export default connect(mapStateToProps, mapDispatchToprops)(Cups);

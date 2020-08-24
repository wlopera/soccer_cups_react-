import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import CupStore from "./CupStore";
import { decorate, observable, action, toJS } from "mobx";
import { observer } from "mobx-react";
import "./styles/Cups.css";
import cupsLogo from "../images/soccer-ball.jpg";

decorate(CupStore, {
  columns: observable,
  cups: observable,
  options: observable,
  getCups: action,
  getCupByYear: action,
  createCup: action,
  updateCup: action,
  deleteCup: action,
});

const cupStore = new CupStore();

class Cups extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Consultar todos los registros
    cupStore.getCups();

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
    const { cups, columns, options } = cupStore;
    console.log(toJS(cupStore));

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
          {cups.length > 0 && (
            <BootstrapTable
              striped
              hover
              keyField="id"
              data={cups}
              columns={columns}
              pagination={paginationFactory(options)}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default observer(Cups);

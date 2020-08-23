import React from "react";
import Service from "../components/Service";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import "./styles/Cups.css";

import cupsLogo from "../images/soccer-ball.jpg";

class Cups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cups: [],
      columns: [
        {
          dataField: "id",
          text: "ID",
          align: "center",
        },
        {
          dataField: "headquarter",
          text: "Sede",
          sort: true,
        },
        {
          dataField: "year",
          text: "Año",
          sort: true,
          align: "center",
        },
        {
          dataField: "champion",
          text: "Campeón",
          sort: true,
        },
        {
          dataField: "score",
          text: "Resultado",
          sort: true,
          align: "center",
        },
        {
          dataField: "subChampion",
          text: "Sub Campeón",
          sort: true,
        },
      ],
    };
  }
  componentDidMount() {
    const service = new Service();

    service
      .getCups()
      .then((result) => {
        this.setState({ cups: result });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  render() {
    const options = {
      sizePerPage: 5,
    };

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
          <BootstrapTable
            striped
            hover
            keyField="id"
            data={this.state.cups}
            columns={this.state.columns}
            pagination={paginationFactory(options)}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Cups;

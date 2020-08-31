import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./styles/Cups.css";
import cupsLogo from "../images/soccer-ball.jpg";
import { connect } from "react-redux";
import { getCups, getCupByYear, createCup, deleteCup, updateCup, showModal } from "../actions/index";
import { Form, Button, Header, Icon, Modal } from "semantic-ui-react";

class Cups extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      headquarter: "",
      year: "",
      champion: "",
      score: "",
      subChampion: "",
      columns: this.getColumn(),
      options: {
        sizePerPage: 5,
        sizePerPageList: [
          {
            text: "5 registros",
            value: 5,
          },
          {
            text: "10 registros",
            value: 10,
          },
          {
            text: "15 registros",
            value: 10,
          },
          {
            text: "20 registros",
            value: 10,
          },
          {
            text: "25 registros",
            value: 10,
          },
          {
            text: "Todos los resgitros",
            value: 50,
          },
        ],
      },
    };
  }

  handlerChange = (el) => {
    const statusCopy = Object.assign({}, this.state);
    statusCopy[el.target.name] = el.target.value;
    this.setState(statusCopy);
  };

  componentDidMount() {
    // Consultar todos los registros
    this.props.getCups();
  }

  addCup = () => {
    const cup = {
      id: "" + this.state.id,
      headquarter: this.state.headquarter,
      year: this.state.year,
      champion: this.state.champion,
      score: this.state.score,
      subChampion: this.state.subChampion,
    };

    this.props.createCup(cup);
    this.props.showModal(false);
  };

  showCups = () => {
    this.props.getCups();
  };

  removeCup = (row) => {
    this.props.deleteCup(row.year);
  };

  createCup = () => {
    const newCup = {
      id: "",
      headquarter: "",
      year: "",
      champion: "",
      score: "",
      subChampion: "",
    };

    this.setState(newCup);
    this.props.showModal(true);
  };

  modifyCup = (row) => {
    const newCup = {
      id: "" + row.id,
      headquarter: row.headquarter,
      year: row.year,
      champion: row.champion,
      score: row.score,
      subChampion: row.subChampion,
    };

    this.setState(newCup);
    this.props.showModal(true);
  };

  updateCup = () => {
    const cup = {
      id: this.state.id,
      headquarter: this.state.headquarter,
      year: this.state.year,
      champion: this.state.champion,
      score: this.state.score,
      subChampion: this.state.subChampion,
    };

    this.props.updateCup(cup);
    this.props.showModal(false);
  };

  getColumn = () => [
    {
      dataField: "id",
      text: "ID",
      align: "center",
      hidden: true,
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
    {
      dataField: "actionDelete",
      text: "Borrar",
      align: "center",
      formatter: (cell, row) => (
        <button className="btn btn-default" onClick={() => this.removeCup(row)}>
          <Icon link name="close" />
        </button>
      ),
    },

    {
      dataField: "actionUpdate",
      text: "Modificar",
      align: "center",
      formatter: (cell, row) => (
        <button className="btn btn-default" onClick={() => this.modifyCup(row)}>
          <Icon link name="pencil alternate" />
        </button>
      ),
    },
  ];

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
          <p align="Center">
            <h2>Campeones Mundiales</h2>
          </p>
          <p align="right">
            <button className="btnAdd" onClick={this.createCup}>
              Agregar Copa
            </button>
          </p>

          {this.props.cups.length > 0 && (
            <BootstrapTable
              striped
              hover
              keyField="id"
              data={this.props.cups}
              columns={this.state.columns}
              pagination={paginationFactory(this.state.options)}
            />
          )}

          <Modal
            size="tiny"
            dimmer="blurring"
            closeIcon
            open={this.props.open}
            onClose={() => this.props.showModal(false)}
            onOpen={() => this.props.showModal(true)}
            closeOnDimmerClick={false}
          >
            <Header icon="archive" content="Agregar Copa" />
            <Modal.Content>
              <Form>
                {/* <Form.Group>
                  <Form.Field width={4}>
                    <label>
                      <strong>ID: </strong>
                    </label>
                  </Form.Field>
                  <Form.Field width={12}>
                    <input
                      type="text"
                      placeholder="Id"
                      id="id"
                      name="id"
                      value={this.state.id}
                      onChange={this.handlerChange}
                    />
                  </Form.Field>
                </Form.Group> */}
                <Form.Group>
                  <Form.Field width={4}>
                    <label>
                      <strong>Sede: </strong>
                    </label>
                  </Form.Field>
                  <Form.Field width={12}>
                    <input
                      type="text"
                      placeholder="Sede"
                      id="headquarter"
                      name="headquarter"
                      value={this.state.headquarter}
                      onChange={this.handlerChange}
                      width={12}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field width={4}>
                    <label>
                      <strong>Año: </strong>
                    </label>
                  </Form.Field>
                  <Form.Field width={12}>
                    <input
                      type="text"
                      placeholder="Año"
                      id="year"
                      name="year"
                      value={this.state.year}
                      onChange={this.handlerChange}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field width={4}>
                    <label>
                      <strong>Campeón: </strong>
                    </label>
                  </Form.Field>
                  <Form.Field width={12}>
                    <input
                      type="text"
                      placeholder="Campeón"
                      id="champion"
                      name="champion"
                      value={this.state.champion}
                      onChange={this.handlerChange}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field width={4}>
                    <label>
                      <strong>Resultado: </strong>
                    </label>
                  </Form.Field>
                  <Form.Field width={12}>
                    <input
                      type="text"
                      placeholder="Resultado"
                      id="score"
                      name="score"
                      value={this.state.score}
                      onChange={this.handlerChange}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field width={4}>
                    <label>
                      <strong>Sub Campeón: </strong>
                    </label>
                  </Form.Field>
                  <Form.Field width={12}>
                    <input
                      type="text"
                      placeholder="Sub Campeón"
                      id="subChampion"
                      name="subChampion"
                      value={this.state.subChampion}
                      onChange={this.handlerChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={() => this.props.showModal(false)}>
                <Icon name="remove" /> Cancelar
              </Button>
              {/* <Button color="green" onClick={() => this.addCup()}> */}
              <Button color="green" onClick={() => this.updateCup()}>
                <Icon name="checkmark" /> Continuar
              </Button>
            </Modal.Actions>
          </Modal>
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
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cups);

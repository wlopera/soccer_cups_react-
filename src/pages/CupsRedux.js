import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./styles/Cups.css";
import cupsLogo from "../images/soccer-ball.jpg";
import { connect } from "react-redux";
import { getCups, getCupByYear, createCup, deleteCup, updateCup, showModal } from "../actions/index";
import { Form, Button, Header, Icon, Modal } from "semantic-ui-react";

class Cups extends React.Component {
  state = {
    id: "",
    headquarter: "",
    year: "",
    champion: "",
    score: "",
    subChampion: "",
  };

  handlerChange = (el) => {
    const statusCopy = Object.assign({}, this.state);
    statusCopy[el.target.name] = el.target.value;
    this.setState(statusCopy);
  };

  componentDidMount() {
    this.props.columns.push({
      dataField: "actionDelete",
      text: "Borrar",
      align: "center",
      formatter: (cell, row) => (
        <button className="btn btn-default" onClick={() => this.removeCup(row)}>
          <Icon link name="close" />
        </button>
      ),
    });

    this.props.columns.push({
      dataField: "actionUpdate",
      text: "Modificar",
      align: "center",
      formatter: (cell, row) => (
        <button className="btn btn-default" onClick={() => this.modifyCup(row)}>
          <Icon link name="pencil alternate" />
        </button>
      ),
    });

    // Consultar todos los registros
    this.props.getCups();
  }

  addCup = () => {
    const cup = {
      id: this.state.id,
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
      id: row.id,
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

  render() {
    console.log("modal: ", this.open);
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
          <button onClick={this.createCup}>Agregar Copa</button>
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
                <Form.Group>
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
                </Form.Group>
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

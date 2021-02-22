import axios from "axios";
const config = require("../config");

class Service {
  // Lista de campeonatos mundiales
  getCups = () =>
    axios.get(`${config.endpoint_base}/cups/`).then((res) => {
      //console.log(123, res.data);
      return res.data;
    });

  // Consulta registro por annio
  getCupByYear = (year) =>
    axios.get(`${config.endpoint_base}/cups/` + year).then((res) => {
      return res.data;
    });

  // Crear un registro (campeonato)
  createCup = (body) => {
    axios.post(`${config.endpoint_base}/cups/`, body).then((res) => {
      return res.data;
    });
  };

  // Eliminar un resgitro
  deleteCup = (year) => {
    axios.delete(`${config.endpoint_base}/cups/` + year).then((res) => {
      return res.data;
    });
  };

  // Actualizar un registro
  updateCup = (body) => {
    axios.put(`${config.endpoint_base}/cups/` + body.year, body).then((res) => {
      return res.data;
    });
  };
}

export default Service;

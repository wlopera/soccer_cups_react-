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
    axios.post(`${config.endpoint_base}/cups/` + body.year, body).then((res) => {
      return res.data;
    });
  };

  // callApi = async (endpoint, options = {}, data) => {
  //   let result;
  //   const url = config.endpoint_base + endpoint;
  //   const response = await axios({
  //     method: options.method,
  //     url: url,
  //     data: data,
  //   })
  //     .then((res) => {
  //       result = res.data;
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });

  //   console.log("Campeonatos", result);
  //   return result;
  // };

  // // Lista de campeonatos mundiales
  // getCups = () => {
  //   console.log("salida: ", this.callApi("/cups/", { method: "get" }));
  //   return this.callApi("/cups/", { method: "get" });
  // };
}

export default Service;

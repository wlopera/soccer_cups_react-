import axios from "axios";

class Service {
  // Lista de campeonatos mundiales
  getCups = () =>
    axios.get(`http://localhost:3000/api/v1/cups/`).then((res) => {
      //console.log("Campeonatos", res.data);
      return res.data;
    });

  // // Crear, actualizar o eliminar codigos Bits
  // putProcessBicIso = input =>
  //   axios.put(`${API_CCB_URL}/api/ach-module/v1/files/putProcessBicIso`, input).then(res => {
  //     return res.data.data
  //   })

  // // Lista de transacciones que pueden ser rechazadas o canceladas
  // getQueryDetailIsoFiles = input =>
  //   axios.post(`${API_CCB_URL}/api/ach-module/v1/files/getQueryDetailIsoFiles`, input).then(res => {
  //     return res.data.data
  //   })
}

export default Service;

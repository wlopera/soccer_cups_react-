import Service from "../services/Service";

class CupStore {
  cups = [];
  columns = [
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
  ];

  options = {
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
  };

  service = new Service();

  // Consultar todos los registros
  getCups = () => {
    this.service
      .getCups()
      .then((result) => {
        this.cups = Object.assign([], result);
        //this.columns = this.getColumns();
        console.log(11, this.getColumns());
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  // Consultar registro por annio
  getCupByYear = (year) => {
    this.service
      .getCupByYear(year)
      .then((result) => {
        const data = [];
        data.push(result);
        this.cups = data;
        //this.columns = this.getColumns();
        console.log(22, this.cups);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  //Agregar Registro
  createCup = (body) => {
    this.service.createCup(body);
  };

  // Actualizar Registro
  updateCup = (body) => {
    this.service.updateCup(body);
  };

  // Borrar registro
  deleteCup = (year) => {
    this.service.deleteCup(year);
  };

  getColumns = () => [
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
  ];
}

export default CupStore;

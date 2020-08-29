import React from "react";
import { GET_CUPS, GET_CUP_BY_YEAR, ADD_CUPS, REMOVE_CUP, UPDATE_CUP, CHANGE_MODAL } from "../actions/index";

const initialState = {
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
  open: false,
};

const reducer = (state = initialState, action) => {
  console.log(11, action.type, action.payload);
  switch (action.type) {
    case GET_CUPS:
      console.log("GEtCUP - state inicial: ", state);
      console.log("GEtCUP - action.payload: ", action.payload);
      return Object.assign({}, state, { cups: action.payload });
    case GET_CUP_BY_YEAR:
      console.log("GET_CUP_BY_YEAR - state inicial: ", state);
      console.log("GET_CUP_BY_YEAR - action.payload: ", action.payload);
      return Object.assign({}, state, { cups: action.payload });
    case ADD_CUPS:
      console.log("ADD_CUPS - state inicial: ", state);
      console.log("ADD_CUPS - action.payload: ", action.payload);
      return Object.assign({}, state, { cups: action.payload });
    case REMOVE_CUP:
      console.log("REMOVE_CUP - state inicial: ", state);
      console.log("REMOVE_CUP - action.payload: ", action.payload);
      return Object.assign({}, state, { cups: action.payload });
    case UPDATE_CUP:
      console.log("UPDATE_CUP - state inicial: ", state);
      console.log("UPDATE_CUP - action.payload: ", action.payload);
      return Object.assign({}, state, { cups: action.payload });
    case CHANGE_MODAL:
      console.log("CHANGE_MODAL - state inicial: ", state);
      console.log("CHANGE_MODAL - action.open: ", action.show);
      return Object.assign({}, state, { open: action.show });
    default:
      return state;
  }
};

export default reducer;

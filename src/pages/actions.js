import Service from "../components/Service";
import axios from "axios";
const config = require("../config");

export const GET_CUPS = "GET_CUPS";

const service = new Service();

export const getCups = () => {
  return (dispatch, getState) => {
    service
      .getCups()
      .then((result) => {
        console.log(22, result);
        dispatch({ type: GET_CUPS, payload: result });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};

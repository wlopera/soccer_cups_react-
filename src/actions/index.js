import Service from "../services/Service";

export const GET_CUPS = "GET_CUPS";
export const GET_CUP_BY_YEAR = "GET_CUP_BY_YEAR";
export const ADD_CUPS = "ADD_CUPS";
export const REMOVE_CUP = "REMOVE_CUP";
export const UPDATE_CUP = "UPDATE_CUP";
export const CHANGE_MODAL = "CHANGE_MODAL";

const service = new Service();

// Uso de react-truck - dispatch => procesar api asincronos
// Consultar todas las copas
export const getCups = () => {
  return (dispatch, getState) => {
    service
      .getCups()
      .then((result) => {
        console.log("Copas: ", result);
        dispatch({ type: GET_CUPS, payload: result });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};

// Consultar registro por annio
export const getCupByYear = (year) => {
  return (dispatch, getState) => {
    service
      .getCupByYear(year)
      .then((result) => {
        //console.log("Copa de ", year, ": ", result);
        dispatch({ type: GET_CUP_BY_YEAR, payload: [result] });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};

//Agregar copa
export const createCup = (body) => {
  return (dispatch, getState) => {
    body.id = getState().cups.length + 1;
    service.createCup(body);
    const data = Object.assign([], getState().cups);
    data.push(body);
    //console.log("Copa creada.: ", data);
    dispatch({ type: ADD_CUPS, payload: data });
  };
};

// // Actualizar Registro
export const updateCup = (body) => {
  return (dispatch, getState) => {
    service.updateCup(body);
    // const data = Object.assign([], getState().cups);
    // const result = data.map((cup) => {
    //   if (`${cup.year}` === `${body.year}`) {
    //     cup.headquarter = body.headquarter;
    //     cup.year = body.year;
    //     cup.champion = body.champion;
    //     cup.score = body.score;
    //     cup.subChampion = body.subChampion;
    //   }
    //   return cup;
    // });
    //console.log("Copa actualizada: ", body);
    dispatch({ type: UPDATE_CUP, payload: body });
  };
};

// // Borrar registro
export const deleteCup = (year) => {
  return (dispatch, getState) => {
    service.deleteCup(year);
    const data = Object.assign([], getState().cups);
    const result = data
      .map((cup) => {
        if (`${cup.year}` !== `${year}`) {
          return cup;
        } else {
          return null;
        }
      })
      .filter((cup) => cup !== null);
    dispatch({ type: REMOVE_CUP, payload: result });
  };
};

//Mostrar modal
export const showModal = (open) => {
  return { type: CHANGE_MODAL, show: open };
};

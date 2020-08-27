import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
// import Cups from "../pages/Cups";
import CupsRedux from "../pages/CupsRedux";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { GET_CUPS } from "../pages/actions";
import Service from "./Service";

import thunk from "redux-thunk";

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
};

const service = new Service();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUPS:
      console.log(12345, action.payload);
      return Object.assign({}, state, { cups: action.payload });

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/" component={Cups} /> */}
            <Route exact path="/cups">
              <CupsRedux />
            </Route>
          </Switch>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}
export default App;

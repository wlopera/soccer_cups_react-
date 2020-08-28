import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
// import Cups from "../pages/Cups";
import CupsRedux from "../pages/CupsRedux";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import reducers from "../reducers/cups";

import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

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

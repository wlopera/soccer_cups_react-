import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import Cups from "../pages/Cups";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cups" component={Cups} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;

import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// componentes para rutas

import About from "../views/About/About";
import MainView from "../views/MainView/MainView";
import Home from "../views/Home/Home";
import Error404 from "../views/404";

export default ({}) => {
  return (
    <HashRouter>
      <main className="container mx-auto px-4 py-10">
        <Switch>
          <Route exact path="/" component={MainView}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route component={Error404}></Route>
        </Switch>
      </main>
    </HashRouter>
  );
};

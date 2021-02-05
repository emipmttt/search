import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../store/actions";

// componentes para rutas

import About from "../views/About/About";
import MainView from "../views/MainView/MainView";
import Home from "../views/Home/Home";
import Error404 from "../views/404";

const Router = ({}) => {
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

// consumiendo el store

const mapDispatchToProps = {
  setUser,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);

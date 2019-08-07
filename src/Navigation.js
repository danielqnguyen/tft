import React from "react";
import { Route } from "react-router-dom";
import Home from "./container/Home/Home";
import Display from "./component/display/Display";

const Navigation = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile/:region/:user" component={Display} />
    </>
  );
};

export default Navigation;

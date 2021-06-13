import React from "react";

import About from "./components/pages/About";
import Website from "./components/pages/Website";
import Css from "./components/pages/Css";
import Javascript from "./components/pages/Javascript";
import Contact from "./components/pages/Contact";
import Board from "./components/pages/Board";
import SignIn from "./components/pages/SignIn";
import LogIn from "./components/pages/LogIn";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    //가상의 주소
    <Router>
      <Route path="/" exact component={About} />
      <Route path="/website" exact component={Website} />
      <Route path="/css" exact component={Css} />
      <Route path="/javascript" exact component={Javascript} />
      <Route path="/board" exact component={Board} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/login" exact component={LogIn} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  );
}

export default App;

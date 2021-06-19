//import React,{useRef} from "react";
//import React from "react"
import About from "./components/pages/About";
import Website from "./components/pages/Website";
import Css from "./components/pages/Css";
import Contact from "./components/pages/Contact";
import Board from "./components/pages/Board";

import { BrowserRouter as Router, Route } from "react-router-dom";
//import {TweenMax, Power3} from 'gsap'

function App() {
  //let logoItem = useRef(null)
  return (
    //가상의 주소
    <Router>
      <Route path="/" exact component={About} />
      <Route path="/website" exact component={Website} />
      <Route path="/css" exact component={Css} />
      <Route path="/board" exact component={Board} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  );
}

export default App;

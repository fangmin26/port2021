
import About from "./components/pages/About";
import Website from "./components/pages/Website";
import Css from "./components/pages/Css";
import Contact from "./components/pages/Contact";
import Board from "./components/pages/Board";

import { BrowserRouter as  HashRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/website" element={<Website/>} />
        <Route path="/css" element={<Css/>} />
        <Route path="/board" element={<Board/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </HashRouter>

  );
}

export default App;

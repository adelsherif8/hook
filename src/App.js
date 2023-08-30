import React from "react";
import { Route, Routes } from "react-router-dom";
import Barbie from "./Barbie";
import Home from "./Home";
import Oppenheimer from "./Oppenheimer";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route exact path="/Oppenheimer" element={<Oppenheimer />} />

      <Route exact path="/barbie" element={<Barbie />} />
    </Routes>
  );
};

export default App;

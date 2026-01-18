import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import PoliticaDePrivacidad from "./components/PoliticaDePrivacidad";
import TerminosYCondiciones from "./components/TerminosYCondiciones";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/politica-de-privacidad"
          element={<PoliticaDePrivacidad />}
        />
        <Route
          path="/terminos-y-condiciones"
          element={<TerminosYCondiciones />}
        />
      </Routes>
    </main>
  );
}

export default App;

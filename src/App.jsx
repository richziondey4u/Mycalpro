import React from "react";
import { CalculationProvider } from "./Context/CalculationContext";
import Subtraction from "./Components/Subtraction";
import Addition from "./Components/Addition";
import Calculation from "./Components/Calculator";

function App() {
  return (
    <CalculationProvider>
      <div className="containier">
        <h1 className="hi">My Project</h1>
        <Addition />
        <Subtraction />
        <Calculation />
      </div>
    </CalculationProvider>
  );
}

export default App;

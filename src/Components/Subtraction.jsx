// SubtractComponent.js
import React from "react";
import { useCalculationContext } from "../Context/CalculationContext";

function Subtraction() {
  const { operation, setOperation } = useCalculationContext();
  return (
    <div className="AD2">
      <h2>Subtraction Component</h2>
      <button onClick={() => setOperation("substract")}>
        Set Subtraction Operation
      </button>
    </div>
  );
}

export default Subtraction;

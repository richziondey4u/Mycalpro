import React from "react";
import { useCalculationContext } from "../Context/CalculationContext";

const Addition = () => {
  const { operation, setOperation } = useCalculationContext();

  return (
    <div className="AD1">
      <h2>Addition Component</h2>
      <button onClick={() => setOperation("add")}>
        Set Addition Operation
      </button>
    </div>
  );
};

export default Addition;

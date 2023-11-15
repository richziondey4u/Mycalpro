import React, { createContext, useContext, useState } from "react";

const CalculationContext = createContext();

export const CalculationProvider = ({ children }) => {
  const [date, setDate] = useState("");
  const [operation, setOperation] = useState("add");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    if (date && number) {
      const currentDate = new Date(date);
      const resultDate = new Date(currentDate);

      if (operation === "add") {
        resultDate.setDate(currentDate.getDate() + parseInt(number, 10));
      } else if (operation === "subtract") {
        resultDate.setDate(currentDate.getDate() - parseInt(number, 10));
      }

      setResult(resultDate.toDateString());
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <CalculationContext.Provider
      value={{
        date,
        setDate,
        operation,
        setOperation,
        number,
        setNumber,
        result,
        handleCalculate,
      }}
    >
      {children}
    </CalculationContext.Provider>
  );
};

export const useCalculationContext = () => {
  return useContext(CalculationContext);
};

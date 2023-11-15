import React from "react";
import { useCalculationContext } from "../Context/CalculationContext";

const Calculation = () => {
  const {
    date,
    setDate,
    operation,
    setOperation,
    number,
    setNumber,
    result,
    handleCalculate,
  } = useCalculationContext();

  return (
    <div className="ca1">
      <h2 className="cal">Calculator Component</h2>
      <form onSubmit={handleCalculate}>
        <div className="cal3">
          <h3>Date Calculation:</h3>
          <label htmlFor="dateId">Input Date:</label>
          <br />
          <input
            type="date"
            id="dateId"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlFor="addition">Add / Subtract:</label>
          <br />
          <select id="addition" name="addition">
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
          </select>
          <br />
          <label htmlFor="numberId">Number of Days:</label>
          <br />
          <input
            type="text"
            id="numberId"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Calculate" />
          <label htmlFor="result">Result: {result}</label>
          <br />
        </div>
      </form>
    </div>
  );
};

export default Calculation;

import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  const addToDisplay = (val) => {
    setDisplayValue(displayValue + val);
  };

  const handleEqual = () => {
    setDisplayValue(math.eval(displayValue));
  };

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Display displayValue={displayValue} />
        <div className="row">
          <Button handleClick={addToDisplay}>7</Button>
          <Button handleClick={addToDisplay}>8</Button>
          <Button handleClick={addToDisplay}>9</Button>
          <Button handleClick={addToDisplay}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToDisplay}>4</Button>
          <Button handleClick={addToDisplay}>5</Button>
          <Button handleClick={addToDisplay}>6</Button>
          <Button handleClick={addToDisplay}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToDisplay}>1</Button>
          <Button handleClick={addToDisplay}>2</Button>
          <Button handleClick={addToDisplay}>3</Button>
          <Button handleClick={addToDisplay}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToDisplay}>.</Button>
          <Button handleClick={addToDisplay}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addToDisplay}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setDisplayValue("")}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useReducer, useState } from "react";
import "../styles/IncDec.css";

const IncDec = () => {
  // const [counter, setCounter] = useState(0);

  // const Increase = () => {
  //   return setCounter(counter + 1);
  // };

  // const Decrease = () => {
  //   return setCounter(counter - 1);
  // };

  const initial = 0;

  const reducer = (state, action) => {
    if (action.type === "Increase") {
      return state + 1;
    }
    if (action.type === "Decrease") {
      return state - 1;
    } else {
      return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <>
      <div className="body">
        <div className="counter">
          <h1>{state} </h1>
          <span>
            <button onClick={() => dispatch({ type: "Increase" })}>
              Increase
            </button>
            <button onClick={() => dispatch({ type: "Decrease" })}>
              Decrease
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default IncDec;

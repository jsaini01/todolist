import React, { useState } from "react";
import "../styles/IncDec.css";

const AutomateUpdateTime = () => {
  let newDate = new Date().toLocaleTimeString();
  const [date, setDate] = useState(newDate);

  const DateUpdate = () => {
    let newDate = new Date().toLocaleTimeString();
    setDate(newDate);
  };
  setInterval(DateUpdate, 1000);

  return (
    <>
      <div className="body">
        <div className="counter">
          <h1>{date} </h1>
        </div>
      </div>
    </>
  );
};

export default AutomateUpdateTime;

import React, { useState } from "react";
import "../styles/IncDec.css";

const TimeUpdate = () => {
  let newDate = new Date().toLocaleTimeString();
  const [date, setDate] = useState(newDate);

  const DateUpdate = () => {
    let newDate = new Date().toLocaleTimeString();
    setDate(newDate);
  };
  return (
    <>
      <div className="body">
        <div className="counter">
          <h1>{date} </h1>
          <span>
            <button onClick={DateUpdate}>Update</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default TimeUpdate;

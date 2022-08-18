import React, { useState } from "react";
import "../styles/acoordian.css";
const MyAcoordian = (props) => {
  const [show, setShow] = useState(false);

  const Show = () => {
    return setShow(!show);
  };

  return (
    <>
      <div className="box">
        <p onClick={Show}>{show ? "➖" : "➕"}</p>
        <h1>{props.question}</h1>
      </div>

      <div className="p"> {show && <p>{props.answer}</p>}</div>
    </>
  );
};

export default MyAcoordian;

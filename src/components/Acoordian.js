import React from "react";
import Data from "./AcoordianApi";
import MyAcoordian from "./MyAcoordian";

import "../styles/acoordian.css";

const Acoordian = () => {
  const quesData = Data;
  return (
    <>
      <div className="body">
        <div className="acoordian">
          {quesData.map((current) => {
            const { id } = current;
            return <MyAcoordian key={id} {...current} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Acoordian;

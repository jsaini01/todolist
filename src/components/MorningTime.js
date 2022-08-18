import React from "react";

const MorningTime = () => {
  let curDate = new Date(2022, 6, 19, 11);
  curDate = curDate.getHours();
  let Day = "";

  const CssStyle = {};

  if (curDate >= 1 && curDate < 12) {
    Day = "GoodMorning";
    CssStyle.color = "orange";
  } else if (curDate >= 12 && curDate < 20) {
    Day = "Goodafternoon";
    CssStyle.color = "yellow";
  } else {
    Day = "Goodnight";
    CssStyle.color = "black";
  }

  return (
    <>
      <h1>
        Hello Sir,
        <span style={CssStyle}>{Day}</span>
      </h1>
    </>
  );
};

export default MorningTime;

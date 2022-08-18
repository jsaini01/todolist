import React from "react";
import "../styles/Cards.css";
import Data from "./CardApi";
import CardData from "./CardData";

const Cards = () => {
  return (
    <>
      <div className="outer">
        <CardData Data={Data} />
      </div>
    </>
  );
};

export default Cards;

import React from "react";
import "../styles/Keep.css";

const CardInputData = (props) => {
  const deleteNote = () => {
    props.deleteItems(props.id);
  };

  return (
    <>
      <div className="data">
        <div className="cards">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <p>
            <i className="fa fa-trash" onClick={deleteNote} />
          </p>
        </div>
      </div>
    </>
  );
};

export default CardInputData;

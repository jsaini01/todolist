import React from "react";
import "../styles/ToDo.css";

const TodoMap = (props) => {
  return (
    <>
      <div className="ToDoFunc">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.delete(props.id);
          }}
        />
        <li>{props.itemsToDo}</li>
      </div>
    </>
  );
};

export default TodoMap;

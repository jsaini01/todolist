import React, { useState } from "react";
import "../styles/ToDo.css";
import TodoMap from "./TodoMap";

const ToDoList = () => {
  const [items, setItems] = useState("");

  const [itemsAdd, setItemsAdd] = useState([]);

  const itemEvent = (e) => {
    setItems(e.target.value);
  };

  const addValue = () => {
    setItemsAdd((old) => {
      return [...old, items];
    });
    setItems("");
  };

  const deleteItems = (id) => {
    setItemsAdd((old) => {
      return old.filter((cur, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <h1> To Do List</h1>
          <input
            type="text"
            placeholder="Add a Items"
            value={items}
            onChange={itemEvent}
          />
          <button type="button" onClick={addValue}>
            +
          </button>
          <br />
          <ol>
            {itemsAdd.map((allItems, index) => {
              return (
                <TodoMap
                  id={index}
                  key={index}
                  itemsToDo={allItems}
                  delete={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;

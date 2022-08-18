import React, { useState } from "react";
import Header from "./Header";
import CardInput from "./CardInput";
import CardInputData from "./CardInputData";
import Footer from "./Footer";

const Keep = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (data) => {
    setAddItem((old) => {
      return [...old, data];
    });
  };

  const deleted = (id) => {
    setAddItem((older) =>
      older.filter((cur, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CardInput passNote={addNote} />

      <div className="center">
        {addItem.map((val, index) => {
          return (
            <CardInputData
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItems={deleted}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Keep;

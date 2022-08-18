import React, { useState } from "react";
import "../styles/Keep.css";

const CardInput = (props) => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const changed = (e) => {
    const { value, name } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(data);
    setData({ title: "", content: "" });
  };

  return (
    <>
      <section>
        <div className="allText">
          <form>
            <input
              type="text"
              placeholder="Title"
              value={data.title}
              name="title"
              onChange={changed}
            />
            <textarea
              rows=""
              column=""
              value={data.content}
              name="content"
              placeholder="Write a note..."
              onChange={changed}
            />
            <p onClick={addEvent}>
              <i className="fa fa-plus" />
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default CardInput;

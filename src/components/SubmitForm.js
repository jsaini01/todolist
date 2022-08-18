import React, { useState } from "react";

const SubmitForm = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const change = (e) => {
    const { name, value } = e.target;

    setFullName((preValue) => {
      return {
        ...preValue.lname,
        [name]: value,
      };
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //   };
      // }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    alert("form submited");
    setFullName("");
  };
  return (
    <>
      <div className="outer">
        <form onSubmit={onSubmit}>
          <h1>
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <input
            type="text"
            placeholder="Enter Email Id"
            name="fname"
            onChange={change}
            value={fullName.fname}
          ></input>
          <input
            type="text"
            placeholder="Password"
            name="lname"
            onChange={change}
            value={fullName.lname}
          ></input>
          <button type="submit" value="Click me">
            Click me
          </button>
        </form>
      </div>
    </>
  );
};

export default SubmitForm;

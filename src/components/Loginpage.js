import React, { useState } from "react";

const Loginpage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usererr, setUsererr] = useState(false);
  const [passerr, setPasserr] = useState(false);

  const emailHandle = (ele) => {
    let item = ele.target.value;
    if (item.length < 1) {
      setUsererr(true);
    } else {
      setUsererr(false);
    }
    setEmail(item);
  };

  const passHandle = (ele) => {
    setPassword(ele.target.value);

    let item = ele.target.value;
    if (item.length < 6) {
      setPasserr(true);
    } else {
      setPasserr(false);
    }
    setPassword(item);
  };

  const AddValue = (e) => {
    e.preventDefault();

    if (email.length < 1) {
      setUsererr("enter email");
    } else if (password.length < 1) {
      setPasserr("enter password");
    } else {
      props.func();
    }
    console.log({ email, password });
  };

  return (
    <div>
      <form onSubmit={AddValue}>
        <h1>Login</h1>
        <label htmlFor="email" />

        <input
          type="email"
          id="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={emailHandle}
        />
        {usererr ? <p>Invalid Username</p> : null}

        <label htmlFor="password" />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={passHandle}
        />
        {passerr ? <p>Too short...</p> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Loginpage;

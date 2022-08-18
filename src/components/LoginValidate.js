import React from "react";
import { valid } from "./Validate";

const LoginValidate = () => {
  const user = async (e) => {
    e.preventDefault();

    let data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const isValid = await valid.isValid(data);

    console.log(isValid);
  };
  return (
    <div>
      <form onSubmit={user}>
        <input type="email" placeholder="email" name="email" />
        <br /> <br />
        <input type="password" placeholder="password" name="password" />
        <br /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginValidate;

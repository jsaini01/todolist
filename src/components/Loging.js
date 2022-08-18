import React from "react";
import { Routes, Route } from "react-router-dom";

import Loginpage from "./Loginpage";
import LoginPersons from "./LoginPersons";
import { useNavigate } from "react-router-dom";

const Loging = () => {
  const navigate = useNavigate();

  const addValues = async (data) => {
    // let items = { email, password };
    let result = await fetch(
      "https://sql-dev-india.thewitslab.com:3003/auth/login ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // body: JSON.stringify(items),
      }
    );

    result = await result.json();

    localStorage.setItem("user-info", JSON.stringify(result.email));

    console.log(result.token);
    navigate("/persons");
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginpage func={addValues} />} />
        <Route path="/persons" element={<LoginPersons />} />
      </Routes>
    </div>
  );
};

export default Loging;

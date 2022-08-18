import React from "react";
import "../styles/Keep.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <p className="copyright"> copyright ©️ {date}</p>
    </>
  );
};

export default Footer;

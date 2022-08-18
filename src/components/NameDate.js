import React from "react";

function NameDate() {
  const Name = "jassi";
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  return (
    <>
      <h1>Name: {Name}</h1>
      <p>Date:{date}</p>
      <p>Time:{time}</p>
    </>
  );
}

export default NameDate;

import React from "react";

const SearchBtn = (props) => {
  const img = `https://source.unsplash.com/600x400/?${props.name}`;
  return (
    <>
      <div>
        <img src={img} alt="pics" />
      </div>
    </>
  );
};

export default SearchBtn;

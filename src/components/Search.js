import React, { useState } from "react";
import SearchBtn from "./SearchBtn";
// import "../styles/search.css";
import { Div } from "./SearchStyle";

const Search = () => {
  const [img, setImg] = useState("");

  const searching = (e) => {
    setImg(e.target.value);
  };

  return (
    <>
      <Div>
        <input
          type="text"
          placeholder="search anything...."
          value={img}
          onChange={searching}
        />

        {img === "" ? null : <SearchBtn name={img} />}
      </Div>
    </>
  );
};

export default Search;

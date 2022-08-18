import React, { useEffect, useState } from "react";

const TitleAndBtnInc = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `clicked ${num}`;
  });
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Clicked! {num}
      </button>
    </>
  );
};

export default TitleAndBtnInc;

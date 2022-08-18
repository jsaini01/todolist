import React from "react";

const Unique = () => {
  let a = [...new Set([1, 3, 45, 3, 2, 1, 2])];
  //   let uniq = a.filter((item, i, ar) => ar.indexOf(item) === i);

  //   let uni = new Set( a[1, 3, 45, 3, 2, 1, 2]);
  return (
    <>
      {/* {document.write(uniq)} */}
      {document.write(a)}
    </>
  );
};

export default Unique;

import React from "react";

const CardData = ({ Data }) => {
  return (
    <>
      <div className="card">
        {Data.map((props) => {
          //   const { id, name, imgsrc, title, links } = cur;
          return (
            <div key={props.id}>
              <h1>{props.name}</h1>
              <a className="Link" href={props.links} target={"_blank"}>
                <img src={props.imgsrc} alt="source" className="img" />
                {/* <h2>{props.title}</h2> */}

                <h1> Movie Link</h1>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardData;

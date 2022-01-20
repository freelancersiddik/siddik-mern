import React from "react";

const Headling = ({h5,h1,p}) => {
  return (
    <div className="header py-5 text-center ">
      <h5>{h5}</h5>
      <h1>{h1}</h1>
      <p>{p}</p>
    </div>
  );
};

export default Headling;

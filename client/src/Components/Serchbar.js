import React from "react";

const Serchbar = () => {
  return (
    <>
      <section id="search">
        <div className="container-fluid">
          <div className="box">
          <input type="search" placeholder="Enter Your Email Address" name="search" id="search" />
          <button>Find</button>
          </div>
          <h1>Subscribe Now</h1>
        </div>
      </section>
    </>
  );
};

export default Serchbar;

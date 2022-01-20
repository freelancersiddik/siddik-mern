import React from "react";

const JoinUs = () => {
  return (
    <>
      <section id="joinUp" >
        <div className="container-fluid py-5 bg-success text-center">
          <div className="container text-white py-5">
            <h5>/JOIN NOW</h5>
            <h1 className="mb-4">We Move The Digital Industry Forward</h1>
            <button
              className="btn mb-3 mb-md-0 fs-5 btn-outline-dark py-2 ms-2 px-3 rounded-pill"
              data-aos="zoom-in"
              data-aos-duration="1400"
              style={{ border: "2px solid #ffff" }}
            >
              <a href="/#Services"> OUR SERVICES</a>
            </button>
            <button
              className="btn mb-3 mb-md-0  fs-5 btn-dark py-2  ms-2  px-5 rounded-pill"
              data-aos="zoom-out"
              data-aos-duration="1300"
            >
              JOIN NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinUs;

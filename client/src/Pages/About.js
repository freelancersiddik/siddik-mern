import React from "react";

const About = () => {
  return (
    <>
      <section id="About">
        <div className="container-fluid">
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-7">
                <h4>/Who we are</h4>
                <h1>Digital Creative Agency. We dare what others don't.</h1>
                <p>
                  Cepteur sint occaecat cupidatat proident, taken possession of
                  my entire soul, like these sweet mornings of spring which I
                  enjoy with my whole heart and feel the charm of existence in
                  this spot, which was created for the bliss of souls.
                </p>
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center">
                    <i className="fas fa-handshake"></i>
                    <div>
                      <h2>Quality</h2>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    <i className="far fa-heart"></i>
                    <div>
                      <h2>Innovation</h2>
                      <p>
                        Vestibulum tortor quam, feugiat vitae, ultricies eget,
                        tempor sit amet, ante donec eu libero.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-5 mx-auto"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <figure>
                  <img
                    src="image/about.jpg"
                    alt="Not Found"
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

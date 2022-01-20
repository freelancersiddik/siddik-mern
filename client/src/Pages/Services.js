import React, { useState } from "react";
import Api from "../Api/services";
import Headling from "../Components/Headling";
const Services = () => {
  const [api, setApi] = useState(Api);
  return (
    <>
      <section id="Services">
        <div className="container-fluid">
          <div className="container pt-4">
            <Headling
              h5="/WHAT WE DO"
              h1="We are a creative studio that combines creativity, technology &
                design"
              p="Creativity is a highfalutin word for the work I have to do
                between now and Tuesday."
            />

            {/* services */}
            <div className="row">
              {api.map((e) => {
                return (
                  <div
                    className="col-md-4 text-center"
                    key={e.id}
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <i className={e.icon}></i>
                    <h2>{e.title}</h2>
                    <p>{e.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container-fluid" id="next_page">
          <div className="row">
            <div className="col-md-6">
              <figure>
                <img
                  src="image/about2.jpg"
                  alt=" Not Found"
                  className="img-fluid "
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
              </figure>
            </div>
            <div className="col-md-6 right_box">
              <h5>/UNIQUE & RESPONSIVE</h5>
              <h1>We do amazing things with amazing people</h1>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
              {/* accodinon */}

              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Website & Mobile App Design
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cepteur sint occaecat cupidatat proident, taken possession
                      of my entire soul, like these sweet mornings of spring
                      which I enjoy with my whole heart and feel the charm of
                      existence in this spot, which was created for the bliss of
                      souls.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Motion Graphics & Animations
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cepteur sint occaecat cupidatat proident, taken possession
                      of my entire soul, like these sweet mornings of spring
                      which I enjoy with my whole heart and feel the charm of
                      existence in this spot, which was created for the bliss of
                      souls.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      User Experience
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cepteur sint occaecat cupidatat proident, taken possession
                      of my entire soul, like these sweet mornings of spring
                      which I enjoy with my whole heart and feel the charm of
                      existence in this spot, which was created for the bliss of
                      souls.
                    </div>
                  </div>
                </div>
              </div>
              {/* accoition */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

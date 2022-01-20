import React from "react";
import Headling from "./Headling";

const Inspired = () => {
  return (
    <>
      <section id="Inspired">
        <div className="container-fluid">
          <div className="container">
            <Headling
              h5="/TRANSPARENT PRICING"
              h1="Find the plan to help your business grow"
              p="Choose the plan that’s right for your company..
"
            />

            <div className="row">
              <div className="col-md-4 my-sm-5">
                <div
                  className="card border-0"
                  data-aos="flip-left"
                  data-aos-duration="1300"
                >
                  <div className="card-body bg-dark text-white p-4 rounded top">
                    <h4>Basic</h4>
                    <h1 className="card-title">$48 / Month</h1>
                    <p className="card-text">
                      All plans include a 30 day trial!
                    </p>
                  </div>
                  <div className="card-body bottom">
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> 15 Active Project
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> 5GB of space
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> Unlimited Users
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> Time Traking
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-times"></i> SSL Security
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> Chat Support
                    </h5>
                    <button className="btn btn-dark w-100 rounded-pill">
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-sm-5">
                <div
                  className="card border-0"
                  data-aos="flip-right"
                  data-aos-duration="1600"
                >
                  <div className="card-body bg-success text-white p-4 rounded top">
                    <h4>POPULAR</h4>
                    <h1 className="card-title">$99/month</h1>
                    <p className="card-text">
                      All plans include a 30 day trial!
                    </p>
                  </div>
                  <div className="card-body bottom">
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> 35 Active Project
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> 15GB of space
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> Unlimited Users
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> Time Traking
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> SSL Security
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> Chat Support
                    </h5>
                    <button className="btn btn-success w-100 rounded-pill">
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-sm-5">
                <div
                  className="card border-0"
                  data-aos="flip-left"
                  data-aos-duration="1300"
                >
                  <div className="card-body bg-dark text-white p-4 rounded top">
                    <h4>ENTERPRISE</h4>
                    <h1 className="card-title">$199/month</h1>
                    <p className="card-text">
                      All plans include a 30 day trial!
                    </p>
                  </div>
                  <div className="card-body bottom">
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> 15 Active Project
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> 50GB of space
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> Unlimited Users
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> Time Traking
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> SSL Security
                    </h5>
                    <h5 className="card-title">
                      <i className="fas fa-check"></i> Chat Support
                    </h5>
                    <button className="btn btn-dark w-100 rounded-pill">
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inspired;

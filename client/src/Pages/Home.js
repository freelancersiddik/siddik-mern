import React from "react";
import Inspired from "../Components/Inspired";
import JoinUs from "../Components/JoinUs";
import Location from "../Components/Location";
import Serchbar from "../Components/Serchbar";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <section id="HomePage">
        <div className="container-fluid">
          <div className="box">
            <h5>Design is intertalizence made visible</h5>
            <p>Desingers are meant to be loved, not to be understood</p>
          </div>
        </div>
      </section>
      <About/>
      <Services/>
      <Team/>
      <Serchbar/>
      <Inspired/>
      <JoinUs/>
      <Contact/>
      <Location/>
    </>
  );
};

export default Home;

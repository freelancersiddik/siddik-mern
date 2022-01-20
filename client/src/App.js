import React from "react";
import Footer from "./Components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
// import all pages form Pages and Components folders
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "./Pages/Dashboard"
const App = () => {
  AOS.init();
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="*" component={Home} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

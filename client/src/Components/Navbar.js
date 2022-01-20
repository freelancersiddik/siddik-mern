import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [auth, setAuth] = useState();

  const history = useHistory();
  // Nav Toggle for mobile devices
  function navToggle() {
    const icon = document.querySelector(".fa-bars");
    const icon2 = document.querySelector(".fa-times");
    icon.style.display = "none";
    icon2.style.display = "block";
    const nav = document.querySelector("ul");
    nav.style.left = "0";
    const audio = new Audio();
    audio.src = "audio/click.mp3";
    audio.play();
  }

  function navToggleHide() {
    const audio = new Audio();
    audio.src = "audio/click.mp3";
    audio.play();
    const icon = document.querySelector(".fa-bars");
    const icon2 = document.querySelector(".fa-times");
    icon.style.display = "block";
    icon2.style.display = "none";
    const nav = document.querySelector("ul");
    nav.style.left = "-100%";
  }

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".container-fluid");
    navbar.classList.toggle("sticky", window.scrollY > 50);
  });

  // });
  const sound = () => {
    const audio = new Audio();
    audio.src = "audio/click.mp3";
    audio.play();
  };


  const navPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setAuth(data.email);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      return setAuth(data.email);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    navPage();
  }, []);

  const logout = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      });
      if (res.status === 200) {
        toast.success(<b>Logout Successful</b>, {
          autoClose: 500,
          theme: "colored",
          position: "bottom-center",
        });
        setTimeout(() => {
          history.push("/");
          window.location.reload();
        }, 600);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section id="Navbar" className="">
        <div className="container-fluid">
          <div className="logo">
            <h2>
              <Link to="/">Jexmon.</Link>
            </h2>
          </div>
          <ul className="toggle_ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#About">About</a>
            </li>
            <li>
              <a href="/#Services">Services</a>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <a href="/#Team">Team</a>
            </li>
            {auth ? (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : (
              <></>
            )}

            <div className="btn_box">
              {auth ? (
                <button onClick={sound}>
                  <Link to="/logout" onClick={logout}>
                    Logout
                  </Link>
                </button>
              ) : (
                <>
                  <button onClick={sound}>
                    <Link to="/login">Login</Link>
                  </button>
                  <button onClick={sound}>
                    <Link to="/register">Sign up</Link>
                  </button>
                </>
              )}
            </div>
          </ul>
          <div className="icon">
            <i className="fas fa-bars" onClick={navToggle}></i>
            <i className="fas fa-times" onClick={navToggleHide}></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;

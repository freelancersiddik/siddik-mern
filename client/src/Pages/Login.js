import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    const audio = new Audio();
    audio.src = "audio/click.mp3";
    audio.play();
    try {
      const { email, password } = user;
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 200) {
        toast.info(<b>Login Successful</b>, {
          autoClose: 900,
          theme: "colored",
          position: "bottom-center",
        });
        setTimeout(() => {
          history.push("/");
          const reload = window.location.replace("/");
          window.location.reload(reload);
        }, 890);
      } else if (!email || !password) {
        toast.warn(<b>Invalid Field</b>, {
          autoClose: 1300,
          theme: "dark",
          position: "bottom-center",
        });
      } else {
        toast.warn(<b>invalid credentials</b>, {
          autoClose: 1300,
          theme: "dark",
          position: "bottom-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="Login">
      <div className="container-fluid">
        <ToastContainer />
        <div className="container mb-3 pt-5">
          <div className="row">
            <div className="col-md-6 left_box text-center p-md-5 p-3 p-md-0 order-2 order-md-2">
              <h1>Hello Friend's.</h1>
              <p>
                To Keep connect with us <br /> Login with your personal info
              </p>
              <Link to="/register">
                <button className="btn">Register</button>
              </Link>
            </div>
            <div className="col-md-6 form_box p-md-5 pb-3 p-md-0 order-1 order-md-1">
              <h1>Login into Jexmon.</h1>
              <div className="icon">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
              <p className="lead">or - Use your email for Login</p>
              <form method="POST" onSubmit={loginSubmit}>
                <div className="form_item">
                  <i className="far fa-envelope-open"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleinput}
                    autoComplete="off"
                  />
                </div>
                <div className="form_item">
                  <i className="fas fa-unlock-alt"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleinput}
                    autoComplete="off"
                  />
                </div>

                <button className="btn">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

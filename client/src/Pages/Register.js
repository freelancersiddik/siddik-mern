import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // fetch data
  const registerSubmit = async (e) => {
    e.preventDefault();
    const audio = new Audio();
    audio.src="audio/click.mp3"
    audio.play()
    const { name, email, password, cpassword } = user;

    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      });
      if (res.status === 422) {
        toast.error(<b>Invalid Field ⌛</b>, {
          autoClose: 1300,
          theme: "dark",
          position: "bottom-center",
        });
      } else if (res.status === 421) {
        toast.warn(<b>Email Already Existed</b>, {
          autoClose: 1300,
          theme: "dark",
          position: "bottom-center",
        });
      } else {
        toast.success(<b>Register Successful</b>, {
          autoClose: 1300,
          theme: "dark",
          position: "bottom-center",
        });
        setTimeout(() => {
          history.push("/login");
        }, 1400);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="register">
      <ToastContainer />
      <div className="container-fluid">
        <div className="container mb-3">
          <div className="row mx-auto">
            <div className="col-md-6 left_box text-center p-5 p-md-0 order-2 order-md-0">
              <h1>Hello Friend's</h1>
              <p>
                To Keep connect with us <br /> Login with your personal info
              </p>
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            </div>
            <div className="col-md-6 form_box pb-3  p-md-0 mt-3 order-1 order-md-1">
              <h1>Create Account</h1>
              <div className="icon">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
              <p className="lead">or - Use your email for registation</p>
              <form method="POST" onSubmit={registerSubmit}>
                <div className="form_item">
                  <i className="far fa-user"></i>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInput}
                    style={{ textTransform: "capitalize" }}
                  />
                </div>
                <div className="form_item">
                  <i className="far fa-envelope-open"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    autoComplete="off"
                    onChange={handleInput}
                  />
                </div>
                <div className="form_item">
                  <i className="fas fa-unlock-alt"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    autoComplete="off"
                  />
                </div>
                <div className="form_item">
                  <i className="fas fa-unlock-alt"></i>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="cpassword"
                    value={user.cpassword}
                    onChange={handleInput}
                    autoComplete="off"
                  />
                </div>
                <button className="btn">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [auth, setAuth] = useState();
  const [info, setInfo] = useState({
    name: "",
    email: "",
  });
  const [msg, setMsg] = useState("");
  const contactPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setAuth(data.name);
      setInfo({ ...info, name: data.name, email: data.email });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    contactPage();
  }, []);

  const contactForm = async (e) => {
    e.preventDefault();
    try {
      const { name, email } = info;
      const message = msg;
      if (!name || !email || !message) {
        toast.warn(<b>Invalid field</b>, {
          autoClose: 1300,
          theme: "dark",
          position: "bottom-center",
        });
      } else {
        const res = await fetch("/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
        if (res.status === 200) {
          toast.success(<b>Message Sund</b>, {
            autoClose: 1300,
            theme: "colored",
            position: "bottom-center",
          });
          setMsg("");
        } else if (res.status === 422) {
          toast.warn(<b>Email does not match</b>, {
            autoClose: 1300,
            theme: "dark",
            position: "bottom-center",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [api, setapi] = useState([
    {
      id: 1,
      icon: "fas fa-map-marker-alt",
      p: "GET US HERE",
      h4: `8 No Sector Uttara Dhaka, Bangladesh`,
    },
    {
      id: 2,
      icon: "fas fa-phone",
      p: "CALL US",
      h4: `+1 123 456 7890`,
    },
    {
      id: 3,
      icon: "fas fa-envelope-open",
      p: "Write us",
      h4: `msd569092@gmail.com`,
    },
  ]);
  // handling input field
  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInfo({ ...info, [name]: value });
  };
  return (
    <>
      <section id="Contact">
        <div className="container-fluid py-5">
          <ToastContainer />
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h5>GET IN TOUCH</h5>
                <h1>Talk or Meet with Us</h1>
                {api.map((e) => {
                  return (
                    <div className="row  mt-4 " key={e.id}>
                      <div
                        className="col-md-2 col-3  my-auto"
                        data-aos="zoom-in"
                        data-aos-duration="1300"
                      >
                        <i className={e.icon}></i>
                      </div>
                      <div className="col-md-10 col-9">
                        <p>{e.p}</p>
                        <h4>{e.h4}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-md-6">
                <h5>ESTIMATE PROJECT</h5>
                <h1>Let Us Know Here</h1>
                <form method="POST" onSubmit={contactForm}>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name *"
                    value={info.name}
                    onChange={handleinput}
                    style={{ textTransform: "capitalize" }}
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your Email *"
                    value={info.email}
                    onChange={handleinput}
                  />
                  <textarea
                    name="message"
                    rows="5"
                    className="form-control"
                    placeholder="Enter your Message *"
                    style={{ resize: "none", textTransform: "capitalize" }}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  ></textarea>
                  {auth ? (
                    <button className="btn">Send Message</button>
                  ) : (
                    <button className="btn disabled">Send Message</button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

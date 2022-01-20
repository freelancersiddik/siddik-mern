import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const Dashboard = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  const calDashboard = async () => {
    try {
      const res = await fetch("/dashboard/authticate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUser(data);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      history.push("/login");
      console.log(error);
    }
  };
  useEffect(() => {
    calDashboard();
  }, []);

  return (
    <>
      <section id="dashboard">
        <div className="container-fluid">
          <div className="container text-capitalize">
            <form method="GET">
              {user.name ? <h1>{user.name}</h1> : <h1>Hello</h1>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

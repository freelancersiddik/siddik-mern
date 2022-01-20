import React, { useState } from "react";
import Headling from "../Components/Headling";

const Team = () => {
  const [api, setapi] = useState([
    {
      id: 1,
      image: "image/client1.jpg",
      name: "John",
      tag: "Ui/ux designer",
    },
    {
      id: 2,
      image: "image/client2.jpg",
      name: "Abigail",
      tag: "Ui/ux designer",
    },
    {
      id: 3,
      image: "image/client3.jpg",
      name: "Anderson",
      tag: "Ui/ux designer",
    },
    {
      id: 4,
      image: "image/client4.jpg",
      name: "Donna",
      tag: "Ui/ux designer",
    },
    {
      id: 5,
      image: "image/client5.jpg",
      name: "Bailey",
      tag: "Ui/ux designer",
    },
  ]);
  return (
    <>
      <section id="Team">
        <div className="container-fluid">
          <div className="container pt-4">
            <Headling
              h5="/Meet our team"
              h1="Minds Behind the Brain"
              p="Alone we can do so little, together we can do so much."
            />
            <div className="row">
              {api.map((e) => {
                return (
                  <div
                    className="col-md-4 col-6"
                    key={e.id}
                    data-aos="flip-left"
                    data-aos-duration="2000"
                  >
                    <div className="card">
                      <img src={e.image} className="card-img-top" alt="Not Found" />
                      <div className="card-body">
                        <h5 className="card-title">{e.name}</h5>
                        <p className="card-text">{e.tag}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

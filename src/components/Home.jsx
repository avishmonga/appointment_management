import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import Doctor from "./Doctor";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://avish-test-api.herokuapp.com/appointment")
      .then(function (response) {
        // handle success
        setData(response.data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="wrapper">
          {data.map((dr) => {
            return (
              <Doctor
              key={dr.id}
                name={dr.name}
                isAvailable={dr.isAvailable}
                speciality={dr.speciality}
                costPerAppointment={dr.costPerAppointment}
                id={dr.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

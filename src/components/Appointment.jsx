import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./appointment.css";
const Appointment = () => {
  const [data, setData] = useState({});
  const [slots,setSlots] = useState([])
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;

  const bookSlot = (id)=>{
     console.log(id)
  }

  useEffect(() => {
    axios
      .get(`https://avish-test-api.herokuapp.com/appointment/${id}`)
      .then(function (response) {
        // handle success
        setData(response.data);
        setSlots(response.data.Availablity)
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="appointment-container">
        {/* LeftPart */}
        <div className="appointment-wrapper">
            <h2>Date: 14-04-2022</h2>
            <div className="slots-wrapper">

            {slots.map((slot)=>{
                return <p onClick={()=>{
                    bookSlot(slot.slot_id)
                }} className={slot.slotAvailable?"slot-available":"slot-notavailable"} key={slot.time}>{slot.time}</p>
            })}
            </div>
            
        </div>


            {/* rightPart  */}
          <div className="img-wrapper">
            <img src="https://user-images.githubusercontent.com/80064807/163210256-b4f8736b-d2d2-4896-82fa-83ec170d78b2.png" />
            <h2>{data.name}</h2>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Appointment;

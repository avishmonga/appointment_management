import React from 'react'
import './home.css'
const Doctor = (props) => {
    const {name,isAvailable,costPerAppointment,speciality} = props
  return (
    <>
    <div className='doctor-card'>
        <img src="https://user-images.githubusercontent.com/80064807/163210256-b4f8736b-d2d2-4896-82fa-83ec170d78b2.png" />
        <p className='doctor-name'>{name}</p>
        <p className='doctor-speciality'>Speciality : {speciality}</p>
        <p className='doctor-cost'>costPerAppointment : {costPerAppointment}</p>
        <p className='doctor-availablity' > Availablity :<span className={isAvailable?"green":"red"}>{isAvailable?"Available":"Not Available"}</span></p>

    </div>
    </>
  )
}

export default Doctor
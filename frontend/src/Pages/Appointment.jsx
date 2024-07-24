import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | WellCare"}
        imageUrl={"https://image.similarpng.com/very-thumbnail/2021/09/3d-sign-in-form-with-boy-stand-with-holding-sign-in-form-on-transparent-background-PNG.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
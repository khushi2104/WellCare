import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            WellCare is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. At
            ZeeCare, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src="https://static.vecteezy.com/system/resources/previews/035/566/727/non_2x/ai-generated-3d-smiling-doctor-with-stethoscope-stand-in-hospital-free-png.png" alt="hero" className="animated-image" />
          <span>
            <img src="https://github.com/Zeeshu911/MERN-Stack-Hospital-Management-System-Web-Application/blob/main/frontend/public/Vector.png?raw=true" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
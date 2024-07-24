import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | WellCare"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"https://cdni.iconscout.com/illustration/premium/thumb/medical-team-1946924-1651969.png?f=webp"} />
    </>
  );
};

export default AboutUs;
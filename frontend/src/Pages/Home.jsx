import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to WellCare | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"https://cdni.iconscout.com/illustration/premium/thumb/medical-team-1946924-1651969.png?f=webp"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
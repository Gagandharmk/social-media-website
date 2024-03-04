import React from "react";
import Nav from "../common/Nav";
import HeroSection from "./HeroSection";
import TrustedUser from "./TrustedUser";
import Benefits from "./Benefits";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustedUser />
      <Benefits />
    </>
  );
};

export default Home;

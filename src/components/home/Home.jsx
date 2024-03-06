import React from "react";
import Nav from "../common/Nav";
import HeroSection from "./HeroSection";
import TrustedUser from "./TrustedUser";
import Benefits from "./Benefits";
import HowItWork from "./HowItWork";
import OurServices from "./OurServices";
import ClientsSay from "./ClientsSay";
import Faqs from "./Faqs";
import SuccessMetrics from "./SuccessMetrics";
import OurBlogs from "./OurBlogs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustedUser />
      <Benefits />
      <HowItWork />
      <OurServices />
      <ClientsSay />
      <Faqs />
      <SuccessMetrics />
      <OurBlogs />
    </>
  );
};

export default Home;

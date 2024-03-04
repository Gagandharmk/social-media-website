import React from "react";
import Nav from "../common/Nav";
import ButtonPrimary from "../common/ButtonPrimary";

const HeroSection = () => {
  return (
    <section className="bg-[url('/images/png/Hero-bg.png')] bg-no-repeat g-origin-content bg-bottom bg-cover w-full  relative">
      <div className="max-w-[1170px] sm:px-4 px-2 md:py-[206px] pt-[128px] pb-[60px] w-full mx-auto ">
        <div className="w-full fixed top-0 left-0 z-50">
          <Nav />
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center sm:gap-[52px] gap-4 relative">
          <img
            className="hidden lg:block absolute right-[-120px] top-[-55px]"
            src="/images/png/forgroundImg1.png"
            alt=""
          />{" "}
          <img
            className="hidden lg:block absolute left-[-80px] bottom-[-130px]"
            src="/images/png/forgroundImg2.png"
            alt=""
          />{" "}
          <div className="flex flex-col max-w-[609px] w-full relative">
            <img
              className="hidden lg:block absolute right-[-90px] top-[-40px]"
              src="/images/png/forgroundImg3.png"
              alt=""
            />
            <h1 className="text-6xl  lg:text-left text-center">
              Transforming Social Media{" "}
              <span className="gradient-text">Management</span> for You
            </h1>
            <p className="text-base mt-[16px] mb-[32px] text-[#00070E] lg:text-left text-center">
              In the dynamic landscape of digital interaction, we understand the
              pivotal role social media plays in connecting individuals and
              businesses
            </p>
            <div className="lg:self-start self-center">
              <ButtonPrimary primary={"Get Started"} />
            </div>
          </div>
          <div className="max-w-[526px] w-full">
            <img
              className=" w-full h-full object-contain "
              src="/images/png/hero-image.png"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

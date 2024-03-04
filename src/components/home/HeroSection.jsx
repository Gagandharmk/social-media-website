import React from "react";
import Nav from "../common/Nav";
import ButtonPrimary from "../common/ButtonPrimary";

const HeroSection = () => {
  return (
    <section
      className="bg-[url('/images/webp/Hero-bg.webp')] bg-no-repeat g-origin-content bg-bottom bg-cover w-full  relative"
      id="home"
    >
      <div className="max-w-[1170px] sm:px-4 px-2 xl:py-[206px]  lg:py-[190px] md:py-[160px] sm:py-[130px] pt-[110px] pb-[30px] w-full mx-auto ">
        <div className="w-full fixed top-0 left-1/2 transform -translate-x-1/2  z-50 mx-auto backdrop-blur-sm">
          <Nav />
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center sm:gap-[52px] gap-7 relative">
          <img
            className="hidden lg:block absolute right-[-120px] top-[-55px]"
            src="/images/webp/forgroundImg1.webp"
            alt=""
          />{" "}
          <img
            className="hidden lg:block absolute left-[-80px] bottom-[-130px]"
            src="/images/webp/forgroundImg2.webp"
            alt=""
          />{" "}
          <div className="flex flex-col max-w-[609px] w-full relative">
            <img
              className="hidden lg:block absolute right-[-90px] top-[-40px]"
              src="/images/webp/forgroundImg3.webp"
              alt=""
            />
            <h1 className="text-6xl  lg:text-left text-center">
              Transforming Social Media{" "}
              <span className="gradient-text">Management</span> for You
            </h1>
            <p className="text-base sm:mt-[16px] mt-[8px] sm:mb-[32px] mb-[14px] text-[#00070E] lg:text-left text-center">
              In the dynamic landscape of digital interaction, we understand the
              pivotal role social media plays in connecting individuals and
              businesses
            </p>
            <div className="lg:self-start self-center">
              <ButtonPrimary primary={"Get Started"} />
            </div>
          </div>
          <div className="max-w-[477px] w-full">
            <img
              className="object-contain"
              src="/images/webp/hero-image.webp"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

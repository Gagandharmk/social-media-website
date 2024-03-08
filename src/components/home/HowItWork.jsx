import React from "react";
import { CheckedIcon } from "../common/Icon";

const HowItWork = () => {
  return (
    <>
      <section
        className="bg-[url('/images/webp/HowItWork.webp')] bg-no-repeat  bg-cover w-full xl:py-[270px]  lg:py-[190px] md:py-[160px] sm:py-[130px] pt-[50px] pb-[30px] relative"
        id="how-it-work"
        style={{ backgroundSize: "100% 100%" }}
      >
        <img
          className="hidden lg:block absolute right-[20px] top-[160px] w-[166px]  "
          src="/images/webp/forgroundImg1.webp"
          alt=""
        />{" "}
        <img
          className="hidden lg:block absolute left-[40px] bottom-[70px]  w-[161px]  "
          src="/images/webp/forgroundImg2.webp"
          alt=""
        />{" "}
        <div className=" max-w-[1170px] px-5  w-full mx-auto flex flex-col items-center lg:gap-[52px] sm:gap-[32px] gap-5 relative z-20">
          <div className="relative">
            <h2 className="text-5xl text-[#00070E]">How It Work</h2>
            <img
              className="absolute lg:right-[-100px] lg:top-[-30px] right-[-60px] top-[-20px] lg:w-[153px] w-[100px]"
              src="/images/webp/forgroundImg3.webp"
              alt=""
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center sm:gap-[42px] gap-6 items-center w-full">
            <div className="max-w-[539px] w-full">
              <img
                className="object-contain"
                src="/images/webp/HowItWorkImage.webp"
                alt="HowItWorkImage"
              />
            </div>
            <div className="flex flex-col max-w-[538px] w-full lg:gap-6 md:gap-5 sm:gap-4 gap-3">
              <div className="flex gap-4">
                <div>
                  <CheckedIcon />
                </div>
                <span className="text-xl text-[#000000]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ante nulla, suscipit sit amet justo in
                </span>
              </div>
              <div className="flex gap-4">
                <div>
                  <CheckedIcon />
                </div>
                <span className="text-xl text-[#000000]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ante nulla, suscipit sit amet justo in
                </span>
              </div>
              <div className="flex gap-4">
                <div>
                  <CheckedIcon />
                </div>
                <span className="text-xl text-[#000000]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ante nulla, suscipit sit amet justo in
                </span>
              </div>
              <div className="flex gap-4">
                <div>
                  <CheckedIcon />
                </div>
                <span className="text-xl text-[#000000]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ante nulla, suscipit sit amet justo in
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWork;

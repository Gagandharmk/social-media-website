import React from "react";
import { SaveIcon } from "../common/Icon";

const OurBlogs = () => {
  return (
    <section className="lg:pt-[52px] lg:pb-[94px] py-[40px] " id="benefits">
      <div className=" max-w-[1170px] sm:px-4 px-2 w-full mx-auto flex flex-col items-center lg:gap-[52px] sm:gap-[32px] gap-5 relative">
        <img
          className="hidden lg:block absolute right-[-120px] top-[50px]"
          src="/images/webp/forgroundImg2.webp"
          alt=""
        />
        <img
          className="hidden lg:block absolute left-[-80px] bottom-[-85px]"
          src="/images/webp/forgroundImg1.webp"
          alt=""
        />
        <div className="relative">
          <h2 className="text-5xl text-[#00070E]">Our Blogs</h2>
          <img
            className=" absolute lg:left-[-60px] lg:top-[-60px] left-[-40px] top-[-40px] lg:w-[84px] w-[50px]"
            src="/images/webp/BebefitForground1.webp"
            alt=""
          />
        </div>
        <p className="text-base text-[#00070E] text-center max-w-[771px] w-full sm:mt-[16px] mt-[8px] px-5 ">
          Suspendisse potenti. Vestibulum gravida turpis ut ipsum efficitur, id
          ullamcorper sem semper
        </p>
        {/* <div className="flex justify-center md:gap-5 gap-3 flex-wrap    "></div> */}
        <div className="flex flex-col lg:flex-row justify-center sm:gap-[42px] gap-6 items-center w-full text-[#00070E]">
          <div className="rounded-2xl bg-white max-w-[558px] w-full lg:gap-5 mg:gap-4 sm:gap-3 gap-2 flex flex-col h-fit">
            <img src="/images/webp/BlogAudience.webp" alt="BlogAudience" />
            <div className="sm:mb-[10px] mb-[8px]">
              <h5 className="text-2xl text-[#00070E] sm:mb-2 mb-[6px]">
                Understanding Your Audience
              </h5>
              <p className="text-base text-[#00070E]">
                Lorem ipsum dolor sit amet consectetur. Egestas mattis mattis id
                ac senectus.
              </p>
            </div>
            <div className="flex justify-between gap-[2px]">
              <div className="flex flex-col">
                <h3 className="text-lg">Joy Roy</h3>
                <span className="text-sm">May 23, 2023</span>
              </div>
              <div>
                <SaveIcon />
              </div>
            </div>
          </div>
          <div className="rounded-2xl  max-w-[558px] w-full  flex flex-col md:gap-[30px] sm:gap-[16px] gap-3">
            <div className="flex items-center  justify-center sm:justify-start md:gap-[24px] sm:gap-[18px] gap-[12px] ">
              <div className="max-w-[267px] w-full overflow-hidden rounded-2xl">
                <img
                  className="w-full"
                  src="/images/webp/BlogPlatforms.webp"
                  alt=""
                />
              </div>
              <div className=" flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-col gap-[2px]">
                  <h3 className="text-lg">Choosing the Right Platforms:</h3>
                  <span className="text-base">Sub Heading Here</span>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h3 className="text-lg">Joy Roy</h3>
                  <span className="text-base">May 23, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start md:gap-[24px] sm:gap-[18px] gap-[12px] ">
              <div className="max-w-[267px] w-full overflow-hidden rounded-2xl order-2 sm:order-1 ">
                <img
                  className="w-full"
                  src="/images/webp/BlogCrafting.webp"
                  alt=""
                />
              </div>
              <div className=" flex flex-col gap-3 sm:gap-4 order-1 sm:order-2 ">
                <div className="flex flex-col gap-[2px]">
                  <h3 className="text-lg">Crafting Compelling Content</h3>
                  <span className="text-base">Sub Heading Here</span>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h3 className="text-lg">Joy Roy</h3>
                  <span className="text-base">May 23, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;

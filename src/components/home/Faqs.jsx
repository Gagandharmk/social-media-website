"use client";

import React from "react";
import Disclosure from "../common/Disclosure";

const Faqs = () => {
  const items = [
    {
      title: "Item 1",
      content: <p>This is the content of item 1.</p>,
    },
    {
      title: "Item 2",
      content: <p>This is the content of item 2.</p>,
    },
    {
      title: "Item 3",
      content: <p>This is the content of item 3.</p>,
    },
  ];
  return (
    <>
      {" "}
      <section className="lg:pt-[194px] lg:pb-[141px] py-[40px] " id="services">
        <div className=" max-w-[1170px] px-5  w-full mx-auto flex flex-col items-center lg:gap-[52px] sm:gap-[32px] gap-5 relative">
          <img
            className="hidden lg:block absolute right-[-120px] top-[50px]"
            src="/images/webp/forgroundImg2.webp"
            alt=""
          />{" "}
          <img
            className="hidden lg:block absolute left-[-80px] bottom-[-85px]"
            src="/images/webp/forgroundImg1.webp"
            alt=""
          />{" "}
          <div className="flex  flex-col gap-[16px]  justify-center items-center w-full">
            <div className="relative">
              <h2 className="text-5xl text-[#00070E] text-center">
                FAQ<span className="gradient-text">s</span>
              </h2>{" "}
              <div className="w-fit">
                <img
                  class="absolute lg:right-[calc(50%-102px)] lg:top-[-77px] right-[calc(50%-68px)] top-[-57px] lg:w-[84px] w-[60px] "
                  src="/images/webp/BebefitForground1.webp"
                  alt="Immage"
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>
              <p className="text-base text-[#00070E] text-center max-w-[771px] w-full sm:mt-[16px] mt-[8px] px-5 ">
                Suspendisse potenti. Vestibulum gravida turpis ut ipsum
                efficitur, id ullamcorper sem semper
              </p>
            </div>
          </div>
          <div className="flex max-w-[1172px] w-full items-center justify-center mx-auto">
            <Disclosure items={items} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;

import React from "react";
import { CheckedIcon } from "../common/Icon";
const SuccessMetrics = () => {
  return (
    <>
      <section
        className="bg-[url('/images/webp/HowItWork.webp')] bg-no-repeat  bg-cover w-full xl:py-[267px]  lg:py-[190px] md:py-[160px] sm:py-[130px] pt-[50px] pb-[30px] relative "
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
        <div className=" max-w-[1170px] px-4  w-full mx-auto flex flex-col items-center lg:gap-[52px] sm:gap-[32px] gap-5 relative">
          <div>
            <h2 className="text-5xl text-[#00070E]">Success Metrics</h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center sm:gap-[42px] gap-6  w-full ">
            <div className="gridentBorder rounded-2xl bg-white max-w-[558px] w-full lg:p-[30px] md:p-5 sm:p-4 p-3 lg:gap-5 mg:gap-4 sm:gap-3 gap-2 flex flex-col lg:self-stretch self-center h-auto">
              <img src="/images/webp/SuccessBefore.webp" alt="Success" />
              <div className="flex flex-col  w-full lg:gap-6 md:gap-5 sm:gap-4 gap-3">
                <h5 className="gradient-text text-3xl">Before</h5>
                <div className="flex gap-4">
                  <div>
                    <CheckedIcon />
                  </div>
                  <p className="text-xl text-[#000000]">
                    Inconsistent Engagement:{" "}
                    <span className="text-base">
                      Your posts struggle to attract likes, comments, and
                      shares, leading to stagnant growth.
                    </span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <div>
                    <CheckedIcon />
                  </div>
                  <p className="text-xl text-[#000000]">
                    Limited Reach:{" "}
                    <span className="text-base">
                      Your content is seen by only a small fraction of your
                      potential audience.
                    </span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <div>
                    <CheckedIcon />
                  </div>
                  <p className="text-xl text-[#000000]">
                    Unoptimized Content:{" "}
                    <span className="text-base">
                      Your visuals lack the professional touch, and your
                      captions don't resonate with your target audience.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="gridentBorder rounded-2xl bg-white max-w-[558px] w-full lg:p-[30px] md:p-5 sm:p-4 p-3 lg:gap-5 mg:gap-4 sm:gap-3 gap-2 flex flex-col lg:self-stretch self-center h-auto">
              <img src="/images/webp/SuccessAfter.webp" alt="Success" />
              <div className="flex flex-col  w-full lg:gap-6 md:gap-5 sm:gap-4 gap-3">
                <h5 className="gradient-text text-3xl">After</h5>
                <div className="flex gap-4">
                  <div>
                    <CheckedIcon />
                  </div>
                  <p className="text-xl text-[#000000]">
                    Vibrant Engagement:{" "}
                    <span className="text-base">
                      our posts become magnets for likes and comments, fostering
                      a lively and engaging community.
                    </span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <div>
                    <CheckedIcon />
                  </div>
                  <p className="text-xl text-[#000000]">
                    Expanded Reach:{" "}
                    <span className="text-base">
                      our content reaches a broader and more targeted audience,
                      exposing your brand to new potential followers.
                    </span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <div>
                    <CheckedIcon />
                  </div>
                  <p className="text-xl text-[#000000]">
                    Stunning Visuals:{" "}
                    <span className="text-base">
                      Your Instagram feed transforms into a visually captivating
                      masterpiece.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessMetrics;

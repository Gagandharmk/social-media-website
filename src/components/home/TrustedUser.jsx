import React from "react";

const TrustedUser = () => {
  return (
    <>
      <section className="lg:pt-[52px] lg:pb-[94px] py-[32px] sm:px-4 px-2">
        <div className="trustShadow max-w-[1140px]  w-full mx-auto flex items-center justify-between md:px-[62px] sm:px-[30px] px-[12px] sm:py-[14px] py-2 gap-[12px] sm:gap-0 overflow-hidden rounded-[24px] relative">
          <img
            className="absolute top-[-180px] left-[-200px] -z-50"
            src="/images/webp/trustEllipse.webp"
            alt="ellipse"
          />
          <img
            className="absolute top-[-180px] left-[230px] -z-50"
            src="/images/webp/trustEllipse.webp"
            alt="ellipse"
          />
          <img
            className="absolute top-[-180px] right-[-150px] -z-50"
            src="/images/webp/trustEllipse.webp"
            alt="ellipse"
          />

          <div className="flex flex-col gap-2">
            <span className="text-xl  text-[#00070E] text-center sm:text-left">
              Trusted Users
            </span>
            <h5 className="sm:text-6xl text-[24px] gradient-text text-center sm:text-left">
              2M+
            </h5>
          </div>
          <div className="trustBorder sm:h-[123px] h-[100px] w-[2px] "></div>
          <div className="flex flex-col gap-2">
            <span className="text-xl  text-[#00070E] text-center sm:text-left">
              Google Review
            </span>
            <h5 className="sm:text-6xl text-[24px] gradient-text text-center sm:text-left">
              277K+
            </h5>
          </div>
          <div className="trustBorder sm:h-[123px] h-[100px] w-[2px] "></div>
          <div className="flex flex-col gap-2">
            <span className="text-xl  text-[#00070E] text-center sm:text-left">
              Return Customers
            </span>
            <h5 className="sm:text-6xl text-[24px] gradient-text text-center sm:text-left">
              99%
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedUser;

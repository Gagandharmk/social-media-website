import React from "react";
import {
  AdvertiseIcon,
  BusinessIcon,
  CalendarIcon,
  CampaignsIcon,
  OnlineIcon,
  ReportIcon,
} from "../common/Icon";

const BenefitCardsData = [
  {
    icon: <OnlineIcon />,
    title: "Enhanced Online Presence",
    description:
      "Boost your brand's visibility across various social media platforms and reach a wider audience. Our services ensure that your business stands out in the digital landscape.",
  },
  {
    icon: <CalendarIcon />,
    title: "Strategic Content Calendar",
    description:
      "Stay ahead of the competition with a well-planned content calendar. We create engaging and relevant posts to keep your audience hooked, leading to increased user interaction",
  },
  {
    icon: <ReportIcon />,
    title: "Analytics and Reporting",
    description:
      "Access detailed analytics and reports to track the performance of your social media campaigns. Our data-driven insights empower you to make informed decisions and optimize your strategy.",
  },
  {
    icon: <BusinessIcon />,
    title: "Focus on Business",
    description:
      "Access detailed analytics and reports to track the performance of your social media campaigns. Our data-driven insights empower you to make informed decisions and optimize your strategy.",
  },
  {
    icon: <CampaignsIcon />,
    title: "Tailored Campaigns",
    description:
      "Our team crafts personalized campaigns to align with your brand's unique identity and goals. We understand your audience and create content that resonates with them.",
  },
  {
    icon: <AdvertiseIcon />,
    title: "Effective Advertising Solutions",
    description:
      "Harness the power of social media advertising. Our experts design and execute targeted ad campaigns to increase your brand's visibility and drive conversions.",
  },

  // Add more objects for each card as needed
];

const Benefits = () => {
  return (
    <section
      className="lg:pt-[52px] lg:pb-[94px] py-[40px]  relative"
      id="benefits"
    >
      <img
        className="hidden lg:block absolute right-[25px] top-[125px] -z-30"
        src="/images/webp/forgroundImg2.webp"
        alt=""
      />{" "}
      <img
        className="hidden lg:block absolute left-[50px] bottom-[0px] -z-30"
        src="/images/webp/forgroundImg1.webp"
        alt=""
      />{" "}
      <div className=" max-w-[1170px] sm:px-4 px-2 w-full mx-auto flex flex-col items-center lg:gap-[52px] sm:gap-[32px] gap-5  ">
        <div className="relative">
          <h2 className="text-5xl text-[#00070E]">Benefits Boulevard</h2>
          <img
            className=" absolute lg:left-[-60px] lg:top-[-60px] left-[-40px] top-[-40px] lg:w-[84px] w-[50px]"
            src="/images/webp/BebefitForground1.webp"
            alt=""
          />{" "}
        </div>
        <div className="flex justify-center md:gap-5 gap-3 flex-wrap  bg-[#ffffff6c]  ">
          {BenefitCardsData.map((card, index) => (
            <div
              key={index}
              className="card flex flex-col items-center rounded-[16px] gridentBorder sm:p-5 p-3 md:max-w-[364px] max-w-[95%]  w-full lg:min-h-[330px] cursor-pointer overflow-hidden bg-[url('/images/webp/CardbackGround.webp')] bg-no-repeat  bg-center bg-[100% 100%] hover:bg-none hover:shadow-custom transition duration-[0.3s] ease-in-out "
            >
              <div className="md:w-fit w-[50px]">{card.icon}</div>
              <h4 className="text-2xl text-[#00070E] sm:mt-[16px] mt-[12px] sm:mb-[8px] mb-[4px] text-center">
                {card.title}
              </h4>
              <span className="text-base text-[#00070E] text-center">
                {card.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

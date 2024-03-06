"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NextIcon, PrevIcon } from "../common/Icon";
import ButtonSecondary from "../common/ButtonSecondary";

const OurServices = () => {
  const swiperRef = useRef(null);
  const BenefitCardsData = [
    {
      src: "/images/webp/ServiceFollower.webp",
      title: "Follower",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus",
    },
    {
      src: "/images/webp/ServiceLike.webp",
      title: "Follower",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus",
    },
    {
      src: "/images/webp/ServiceComment.webp",
      title: "Follower",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus",
    },
    {
      src: "/images/webp/ServiceFollower.webp",
      title: "Follower",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus",
    },
    {
      src: "/images/webp/ServiceLike.webp",
      title: "Follower",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus",
    },
    {
      src: "/images/webp/ServiceComment.webp",
      title: "Follower",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus",
    },

    // Add more objects for each card as needed
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
          <div className="flex md:flex-row flex-col gap-[16px] md:justify-between justify-center items-center w-full">
            <div className="relative">
              <h2 className="text-5xl text-[#00070E]">Our Services</h2>
              <img
                className=" absolute lg:left-[-60px] lg:top-[-60px] left-[-40px] top-[-40px] lg:w-[84px] w-[50px]"
                src="/images/webp/BebefitForground1.webp"
                alt=""
              />{" "}
            </div>{" "}
            <div className="flex flex-wrap justify-center items-center gap-3">
              <ButtonSecondary secondary={"Youtube"} />
              <ButtonSecondary secondary={"Instagram"} />
              <ButtonSecondary secondary={"Facebook"} />
              <ButtonSecondary secondary={"Youtube"} />
            </div>
          </div>
          <div className="flex max-w-[1172px] w-full items-center justify-center mx-auto">
            <Swiper
              ref={swiperRef}
              centeredSlides={true}
              spaceBetween={30}
              // loop={true}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              navigation={{
                prevEl: "swiper-button-prev",
                nextEl: "swiper-button-next",
              }}
              className="mySwiper "
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {BenefitCardsData.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="card flex flex-col items-start rounded-[16px] gridentBorder sm:p-5 p-3 !max-w-[364px]  lg:min-h-[340px] cursor-pointer overflow-hidden hover:bg-none hover:shadow-custom transition duration-[0.3s] ease-in-out "
                >
                  <div className="md:w-fit ">
                    <img src={card.src} alt="Image" />
                  </div>
                  <h4 className="text-2xl text-[#00070E] sm:mt-[16px] mt-[12px] sm:mb-[8px] mb-[4px] text-center">
                    {card.title}
                  </h4>
                  <span className="text-base text-[#00070E] text-left">
                    {card.description}
                  </span>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev">
                <PrevIcon />
              </div>
              <div className="swiper-button-next">
                <NextIcon />
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;

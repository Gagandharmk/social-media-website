"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const OurServices = () => {
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
      <section className="lg:pt-[52px] lg:pb-[94px] py-[40px] " id="services">
        <div className=" max-w-[1170px] sm:px-4 px-2 w-full mx-auto flex flex-col items-center lg:gap-[52px] sm:gap-[32px] gap-5 relative">
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
          <div className="relative">
            <h2 className="text-5xl text-[#00070E]">Our Services</h2>
            <img
              className=" absolute lg:left-[-60px] lg:top-[-60px] left-[-40px] top-[-40px] lg:w-[84px] w-[50px]"
              src="/images/webp/BebefitForground1.webp"
              alt=""
            />{" "}
          </div>
          <div className="flex items-center justify-center mx-auto">
            <Swiper
              spaceBetween={30}
              //   centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper  "
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {BenefitCardsData.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="card flex flex-col items-start rounded-[16px] gridentBorder sm:p-5 p-3 max-w-[364px]  lg:min-h-[330px] cursor-pointer overflow-hidden hover:bg-none hover:shadow-custom transition duration-[0.3s] ease-in-out "
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
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
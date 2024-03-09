"use client";
import React from "react";
import { NotaionIcon, Star } from "../common/Icon";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const ClientsSay = () => {
  // Define an array of client testimonial data
  const testimonials = [
    {
      name: "Ralph Edwards",
      position: "Senior SEO Executive",
      rating: 5,
      content:
        "I  am absolutely delighted to share my positive experience as a client. From the moment I engaged with the company, I was met with exceptional professionalism and dedication to ensuring my satisfaction. The level of service provided was truly outstanding, and every interaction I had with the team was characterized by their unwavering commitment to excellence.",
      profileImg: "/images/webp/ClientProfile1.webp",
    },
    {
      name: "Ralph Edwards",
      position: "Senior SEO Executive",
      rating: 3,
      content:
        "I  am absolutely delighted to share my positive experience as a client. From the moment I engaged with the company, I was met with exceptional professionalism and dedication to ensuring my satisfaction. The level of service provided was truly outstanding, and every interaction I had with the team was characterized by their unwavering commitment to excellence.",
      profileImg: "/images/webp/ClientProfile1.webp",
    },
    {
      name: "Ralph Edwards",
      position: "Senior SEO Executive",
      rating: 3,
      content:
        "I  am absolutely delighted to share my positive experience as a client. From the moment I engaged with the company, I was met with exceptional professionalism and dedication to ensuring my satisfaction. The level of service provided was truly outstanding, and every interaction I had with the team was characterized by their unwavering commitment to excellence.",
      profileImg: "/images/webp/ClientProfile1.webp",
    },
    // Add more testimonials as needed
  ];

  return (
    <section
      className="bg-[url('/images/webp/HowItWork.webp')] bg-no-repeat  bg-center w-full xl:py-[270px] lg:py-[190px] md:py-[160px] sm:py-[130px] pt-[50px] pb-[30px] relative"
      style={{ backgroundSize: "100% 100%" }}
      id="testimonials"
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
      <div className="max-w-[1170px] px-4  w-full mx-auto flex flex-col items-center lg:gap-[52px] sm:gap-[32px] gap-5 ">
        <div className="relative">
          <h2 className="text-5xl text-[#00070E] text-center">
            What Our Clients Say
          </h2>{" "}
          <img
            className="absolute lg:right-[calc(50%-351px)] lg:top-[-30px] right-[calc(50%-219px)] top-[-20px] lg:w-[153px] w-[100px] sm:block hidden"
            src="/images/webp/forgroundImg3.webp"
            alt=""
          />
          <p className="text-base text-[#00070E] text-center max-w-[771px] w-full sm:mt-[16px] mt-[8px] px-5 ">
            Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero
            mauris neque dolor pellentesque sagittis. Scelerisque tempor auctor
            euismod.
          </p>
        </div>
        {/* <div className="flex !w-full  gap-5"> */}
        <Swiper
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay, Pagination]}
          className="ClientSwiper"
          breakpoints={{
            640: {
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 30,
            },
            1280: {
              spaceBetween: 40,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              style={{ width: "100%", maxWidth: "1140px", height: "auto" }}
              key={index}
              className=" gridentBorder !w-full   bg-white lg:py-[45px] md:py-[32px] sm:py-[24px] py-[16px] px-2 flex justify-center relative overflow-hidden"
            >
              <img
                className="absolute left-[130px] bottom-[40px] -z-0 hidden lg:flex"
                src="/images/webp/ClientProfile2.webp"
                alt="Profile Immage"
              />
              <img
                className="absolute top-[75px] left-[270px] -z-0 hidden lg:flex"
                src="/images/webp/ClientProfile3.webp"
                alt="Profile Immage"
              />
              <img
                className="absolute top-[130px] left-[121px] -z-0 hidden lg:flex"
                src="/images/webp/ClientProfile5.webp"
                alt="Profile Immage"
              />
              <img
                className="absolute top-[184px] right-[210px] -z-0 hidden lg:flex"
                src="/images/webp/ClientProfile5.webp"
                alt="Profile Immage"
              />
              <img
                className="absolute top-[236px] left-[85px] -z-0 hidden lg:flex"
                src="/images/webp/ClientProfile6.webp"
                alt="Profile Immage"
              />
              <img
                className="absolute top-[100px] right-[77px] -z-0 hidden lg:flex"
                src="/images/webp/ClientProfile6.webp"
                alt="Profile Immage"
              />
              <img
                className="absolute bottom-[25px] right-[64px] -z-0 hidden lg:flex"
                src="/images/webp/ClientProfile7.webp"
                alt="Profile Immage"
              />
              <div className="absolute left-[181px] top-[250px]  -z-0 hidden lg:flex">
                <NotaionIcon />
              </div>
              <div className="flex flex-col items-center max-w-full">
                <div className="flex justify-center">
                  <img
                    className="sm:w-full w-[75px]"
                    src={testimonial.profileImg}
                    alt="Profile image"
                  />
                </div>
                <div className="flex flex-col gap-1 sm:mt-[16px] mt-[8px] sm:mb-[24px] mb-[12px]">
                  <h5 className="text-3xl gradient-text text-center">
                    {testimonial.name}
                  </h5>
                  <span className="text-base text-[#00070E] text-center">
                    {testimonial.position}
                  </span>
                  <div className="flex justify-center gap-[5px]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                </div>
                <div className="max-w-[677px] w-full text-center text-base text-[#00070E] mb-[38px]">
                  {testimonial.content}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </section>
  );
};

export default ClientsSay;

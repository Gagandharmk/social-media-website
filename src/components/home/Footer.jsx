import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwiterIcom,
  YoutubeIcon,
} from "../common/Icon";

const Footer = () => {
  return (
    <>
      <section
        className="bg-[url('/images/webp/Footer-bg.webp')] bg-no-repeat bg-top !bg-cover w-full xl:pt-[206px]  lg:pt-[190px] md:pt-[160px] sm:pt-[130px] pt-[50px] pb-[30px] relative "
        id="how-it-work"
        style={{ backgroundSize: "100% 100%" }}
      >
        <img
          className="hidden lg:block absolute right-[25px] top-[67px] "
          src="/images/webp/forgroundImg2.webp"
          alt=""
        />{" "}
        <div className=" max-w-[1170px] px-4  w-full mx-auto flex flex-col md:flex-row  justify-between items-center lg:gap-[52px] sm:gap-[32px] gap-5 relative">
          <div className="flex flex-col gap-4 max-w-[301px] items-center md:items-start text-center md:text-left w-full">
            <a href="#" className="text-4xl gradient-text">
              Logo
            </a>
            <p className="text-base text-[#00070E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
              felis molestie, placerat risus at, feugiat sem
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="/www.facebook.com"
                className="hover:scale-110 transition"
              >
                <FacebookIcon />
              </a>
              <a
                href="/www.instagram.com"
                className="hover:scale-110 transition"
              >
                <InstagramIcon />
              </a>
              <a href="/www.twiter.com" className="hover:scale-110 transition">
                <TwiterIcom />
              </a>
              <a href="/www.youtube.com" className="hover:scale-110 transition">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div className="flex justify-between max-w-[694px] w-full text-[#00070E]">
            <div className="flex flex-col gap-3">
              <h4 className="text-lg">Company</h4>
              <div className="flex flex-col gap-[6px] text-sm">
                <a href="#" className="footer-link">
                  home
                </a>
                <a href="#" className="footer-link">
                  Who we are
                </a>
                <a href="#" className="footer-link">
                  Our Products
                </a>
                <a href="#" className="footer-link">
                  Our Recent Projects
                </a>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </div>
            </div>
            {""}
            <div className=" one flex flex-col gap-3">
              <h4 className="text-lg">Contact </h4>
              <div className="flex flex-col gap-[6px] text-sm">
                <a href="#" className="footer-link">
                  home
                </a>
                <a href="#" className="footer-link">
                  About
                </a>
                <a href="#" className="footer-link">
                  Email
                </a>
              </div>
            </div>
            {""}
            <div className=" one flex flex-col gap-3">
              <h4 className="text-lg">Group</h4>
              <div className="flex flex-col gap-[6px] text-sm">
                <a href="#" className="footer-link">
                  home
                </a>
                <a href="#" className="footer-link">
                  Contact me
                </a>
                <a href="#" className="footer-link">
                  About
                </a>
              </div>
            </div>
            {""}
            <div className=" one flex flex-col gap-3">
              <h4 className="text-lg">Privacy Policy</h4>
              <div className="flex flex-col gap-[6px] text-sm">
                <a href="#" className="footer-link">
                  home
                </a>
                <a href="#" className="footer-link">
                  About
                </a>
                <a href="#" className="footer-link">
                  Our Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

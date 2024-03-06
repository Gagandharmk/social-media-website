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
        className="bg-[url('/images/webp/HowItWork.webp')] bg-no-repeat  bg-cover w-full xl:py-[206px]  lg:py-[190px] md:py-[160px] sm:py-[130px] pt-[50px] pb-[30px] "
        id="how-it-work"
        style={{ backgroundSize: "100% 100%" }}
      >
        <div className=" max-w-[1170px] px-4  w-full mx-auto flex flex-col md:flex-row  justify-between items-center lg:gap-[52px] sm:gap-[32px] gap-5 relative">
          <div className="flex flex-col gap-4 max-w-[301px] items-center md:items-start text-center md:text-left w-full">
            <h3 className="text-4xl gradient-text">Logo</h3>
            <p className="text-base text-[#00070E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
              felis molestie, placerat risus at, feugiat sem
            </p>
            <div className="flex gap-4 items-center">
              <FacebookIcon />
              <InstagramIcon />
              <TwiterIcom />
              <YoutubeIcon />
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

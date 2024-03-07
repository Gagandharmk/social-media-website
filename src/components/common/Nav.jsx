import React from "react";
import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";
import { Hamberger, HambergerCancel } from "./Icon";

const Nav = ({ onClick, showSizeBar }) => {
  return (
    <nav className="w-full max-w-[1172px]  mx-auto flex justify-between items-center  bg-transparent py-[18px]  px-4">
      <div className="text-4xl  gradient-text cursor-pointer ">
        <Link href="/">Logo</Link>
      </div>
      <div className="flex gap-[130px] ">
        <ul className="hidden justify-center items-center gap-[32px] lg:flex">
          <li className="text-base text-nowrap hover:scale-110 transition ">
            <Link href="#home">Home</Link>
          </li>
          <li className="text-base text-nowrap hover:scale-110 transition">
            <Link href="#benefits">Benefits</Link>
          </li>
          <li className="text-base text-nowrap hover:scale-110 transition">
            <Link href="#how-it-work">How It Works</Link>
          </li>
          <li className="text-base text-nowrap hover:scale-110 transition">
            <Link href="#services">Service</Link>
          </li>
          <li className="text-base text-nowrap hover:scale-110 transition">
            <Link href="#testimonials">Testimonials</Link>
          </li>
        </ul>

        <div className="flex justify-center items-center gap-x-5">
          <ButtonPrimary primary={"Contact Us"} />
          <div
            className={`flex mx-4 lg:hidden cursor-pointer ${
              showSizeBar ? "!hidden" : ""
            }`}
            onClick={onClick}
          >
            {showSizeBar ? <HambergerCancel /> : <Hamberger />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

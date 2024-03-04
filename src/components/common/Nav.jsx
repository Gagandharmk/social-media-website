import React from "react";
import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";

const Nav = () => {
  return (
    <>
      <nav className="max-w-[1172px] w-full mx-auto flex justify-between items-center  bg-transparent py-[18px]  px-4">
        <div className="text-4xl  gradient-text cursor-pointer ">
          <Link href="/">Logo</Link>
        </div>
        <div className="flex gap-[130px] ">
          <ul className="hidden justify-center items-center gap-[32px] lg:flex">
            <li className="text-base text-nowrap  ">
              <Link href="#home">Home</Link>
            </li>
            <li className="text-base text-nowrap">
              <Link href="#benefits">Benefits</Link>
            </li>
            <li className="text-base text-nowrap">
              <Link href="/how-it-work">How It Works</Link>
            </li>
            <li className="text-base text-nowrap">
              <Link href="/service">Service</Link>
            </li>
            <li className="text-base text-nowrap">
              <Link href="/testimonials">Testimonials</Link>
            </li>
          </ul>
          <ButtonPrimary primary={"Contact Us"} />
        </div>
      </nav>
    </>
  );
};

export default Nav;

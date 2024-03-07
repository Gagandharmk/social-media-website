import React from "react";
import Link from "next/link";
import ButtonPrimary from "../common/ButtonPrimary";
import { Hamberger, HambergerCancel } from "../common/Icon";

const Sidebar = ({ showSizeBar, onClick }) => {
  const closeSidebar = () => {
    if (showSizeBar) {
      onClick(); // Close the sidebar
    }
  };

  return (
    <div
      className={`fixed  top-0 z-50  duration-[0.3s] ease-in-out sidebar ${
        showSizeBar ? "left-0" : "left-[-100%]"
      }`}
    >
      <div className="w-[375px] h-screen transition duration-1000  overflow-clip">
        <nav className="w-full  mx-auto flex flex-col   bg-transparent py-[18px]  px-6">
          <div className="text-4xl flex justify-between items-center gradient-text cursor-pointer  mb-[90px]">
            <Link href="/">Logo</Link>
            <div className="flex mx-4  cursor-pointer" onClick={onClick}>
              {showSizeBar ? <HambergerCancel /> : ""}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-[30px] text-[#00070E]">
            <ul className=" justify-start items-start gap-[32px] flex flex-col">
              <li
                className="text-2xl text-nowrap hover:scale-110 transition drop-shadow group-hover:"
                onClick={closeSidebar}
              >
                <Link href="#home" className="">
                  Home
                </Link>
              </li>
              <li
                className="text-2xl text-nowrap hover:scale-110 transition drop-shadow"
                onClick={closeSidebar}
              >
                <Link href="#benefits">Benefits</Link>
              </li>
              <li
                className="text-2xl text-nowrap hover:scale-110 transition drop-shadow"
                onClick={closeSidebar}
              >
                <Link href="#how-it-work">How It Works</Link>
              </li>
              <li
                className="text-2xl text-nowrap hover:scale-110 transition drop-shadow"
                onClick={closeSidebar}
              >
                <Link href="#services">Service</Link>
              </li>
              <li
                className="text-2xl text-nowrap hover:scale-110 transition drop-shadow"
                onClick={closeSidebar}
              >
                <Link href="#testimonials">Testimonials</Link>
              </li>
            </ul>

            <button
              className={`w-full gradient-bg cta-text !text-white rounded-[32px]  flex items-center justify-center hover:opacity-95 hover:scale-105 hover:!text-black transition-all duration-200  h-[42px]`}
            >
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

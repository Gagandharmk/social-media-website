import React, { useState } from "react";

const ServiceButton = ({ secondary, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative">
        <button
          className={`serviceButton hover:gradient-bg text-base hover:!text-white rounded-[32px] flex items-center justify-center !text-black transition-all duration-200 xl:w-[132px] lg:w-[120px] md:w-[110px] w-[100px] xl:h-[55px] lg:-h[50px] md:h-[45px] h-[42px]`}
          onClick={toggleDropdown}
        >
          {secondary}
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 sm:w-[125px] w-[100px]  bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-20">
            {dropdownItems.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 text-base hover:gradient-bg"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceButton;

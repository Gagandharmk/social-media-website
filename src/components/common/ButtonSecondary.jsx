import React from "react";

const ButtonSecondary = ({ secondary }) => {
  return (
    <>
      <button
        className={`serviceButton hover:gradient-bg  text-base hover:!text-white rounded-[32px]  flex items-center justify-center  !text-black transition-all duration-200 xl:w-[132px] lg:w-[120px] md:w-[110px] w-[100px]  xl:h-[55px] lg:-h[50px] md:h-[45px] h-[42px]`}
      >
        {secondary}
      </button>
    </>
  );
};

export default ButtonSecondary;

import React from "react";

const ButtonPrimary = ({ primary }) => {
  return (
    <>
      <button
        className={`gradient-bg cta-text !text-white rounded-[32px]  flex items-center justify-center hover:opacity-80 hover:!text-black transition-all duration-200 xl:w-[184px] lg:w-[150px] md:w-[135px] w-[120px]  xl:h-[55px] lg:-h[50px] md:h-[45px] h-[42px]`}
      >
        {primary}
      </button>
    </>
  );
};

export default ButtonPrimary;

"use client";
import React, { useState, useEffect } from "react";
import CommonInput from "../common/CommonInput";
import ButtonPrimary from "../common/ButtonPrimary";

const ContactUs = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [inputValues, setInputValues] = useState({
    fName: "",
    lName: "",
    email: "",
    pNumber: "",
    city: "",
    pin: "",
    message: "",
  });

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // Clear active input if any input is empty
      if (
        inputValues.fName === "" ||
        inputValues.lName === "" ||
        inputValues.email === "" ||
        inputValues.pNumber === "" ||
        inputValues.city === "" ||
        inputValues.pin === "" ||
        inputValues.message === ""
      ) {
        setActiveInput(null);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [inputValues]);

  const handleInputClick = (inputId) => {
    if (activeInput !== inputId) {
      setActiveInput(inputId);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));

    // Clear active input if the value becomes empty
    if (value === "") {
      setActiveInput(null);
    }
  };

  return (
    <>
      <section className="lg:pt-[52px] lg:pb-[94px] py-[40px] " id="contactUs">
        <div className=" max-w-[1170px] sm:px-4 px-2 w-full mx-auto flex flex-col lg:flex-row justify-center lg:justify-between  items-center lg:gap-[52px] sm:gap-[32px] gap-5 relative">
          <img
            className="hidden lg:block absolute -z-40 w-1/2 top-0 left-[calc(0%-155px)]"
            src="/images/webp/ContactUs.webp"
            alt=""
          />
          <div className="flex flex-col max-w-[290px] w-full lg:text-white text-[#010710] text-center lg:text-left">
            <h2 className="text-5xl"> Contact us</h2>
            <p className="text-base mt-[21px] mb-[16px]">
              Egestas mattis mattis id ac senectus.
            </p>
            <div className="flex flex-col gap-1">
              <a href="tel:+123-343-4333" className="text-base">
                <span className="font-bold">Telephone:</span> 123-343-4333
              </a>
              <a href="fax:+1234567890">
                <span className="font-bold">Fax:</span>1234567800
              </a>
              <a href="mailto:xyz@gmail.com">
                <span className="font-bold">Email:</span>xyz@gmail.com
              </a>
            </div>
          </div>
          <form
            action="/submit-form"
            method="post"
            className="xl:max-w-[642px] lg:max-w-[550px] max-w-[500px] w-full"
          >
            <div className="  sm:max-w-full flex flex-col max-w-[400px] lg:gap-6 mg:gap-5 sm:gap-3 gap-2 sm:mx-0 mx-auto">
              <div className="flex lg:gap-5 mg:gap-4 gap-3 sm:flex-row flex-col">
                <CommonInput
                  type={"text"}
                  placeholder={"First name"}
                  id="fName"
                  isActive={activeInput === "fName" || inputValues.fName !== ""}
                  onChange={handleInputClick}
                  onInputChange={handleInputChange}
                  value={inputValues.fName}
                />
                <CommonInput
                  type={"text"}
                  placeholder={"Last name"}
                  id="lName"
                  isActive={activeInput === "lName" || inputValues.lName !== ""}
                  onChange={handleInputClick}
                  onInputChange={handleInputChange}
                  value={inputValues.lName}
                />
              </div>
              <div className="flex lg:gap-5 mg:gap-4 gap-3 sm:flex-row flex-col">
                <CommonInput
                  type={"email"}
                  placeholder={"Email"}
                  id="email"
                  isActive={activeInput === "email" || inputValues.email !== ""}
                  onChange={handleInputClick}
                  onInputChange={handleInputChange}
                  value={inputValues.email}
                />
                <CommonInput
                  type={"number"}
                  placeholder={"Phone no."}
                  id="pNumber"
                  isActive={
                    activeInput === "pNumber" || inputValues.pNumber !== ""
                  }
                  onChange={handleInputClick}
                  onInputChange={handleInputChange}
                  value={inputValues.pNumber}
                />
              </div>
              <div className="flex lg:gap-5 mg:gap-4 gap-3 sm:flex-row flex-col">
                <CommonInput
                  type={"text"}
                  placeholder={"City"}
                  id="city"
                  isActive={activeInput === "city" || inputValues.city !== ""}
                  onChange={handleInputClick}
                  onInputChange={handleInputChange}
                  value={inputValues.city}
                />
                <CommonInput
                  type={"number"}
                  placeholder={"Pin code"}
                  id="pin"
                  isActive={activeInput === "pin" || inputValues.pin !== ""}
                  onChange={handleInputClick}
                  onInputChange={handleInputChange}
                  value={inputValues.pin}
                />
              </div>
              <div className="flex lg:gap-5 mg:gap-4 gap-3 sm:flex-row flex-col">
                <div
                  className={`flex items-center w-full text-lg font-urbanist whitespace-nowrap bg-white rounded-md px-4 border ${
                    activeInput === "message" || inputValues.message !== ""
                      ? "bg-white shadow-custom"
                      : ""
                  } p-3`}
                >
                  <textarea
                    id="message"
                    value={inputValues.message}
                    placeholder="Message"
                    className={`text-lg font-urbanist outline-none w-full pr-2 bg-transparent placeholder-text-[#848484] text-black appearance-none resize-none ${
                      activeInput === "message" || inputValues.message !== ""
                        ? "placeholder-text-[#010710] text-[#010710]"
                        : ""
                    }`}
                    isActive={
                      activeInput === "message" || inputValues.message !== ""
                    }
                    onChange={handleInputChange}
                    onClick={() => handleInputClick("message")}
                    rows={"4"}
                    required
                  />
                </div>
              </div>
              <div className="self-center lg:self-start">
                <ButtonPrimary primary={"Submit"} />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

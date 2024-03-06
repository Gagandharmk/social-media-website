import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "./Icon";

const Disclosure = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDisclosure = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Define an array of objects containing the content for each disclosure item
  const disclosures = [
    {
      heading: "Maecenas porttitor enim nec velit ultrices?",
      paragraph:
        "Pellentesque iaculis, nisl et consectetur mattis, neque eros finibus elit, quis semper ipsum lorem vel augue. Aliquam erat volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna risus, pulvinar ut metus at, consequat aliquet justo. Mauris egestas aliquam ligula ut molestie",
    },
    {
      heading: "Maecenas porttitor enim nec velit ultrices?",
      paragraph:
        "Pellentesque iaculis, nisl et consectetur mattis, neque eros finibus elit, quis semper ipsum lorem vel augue. Aliquam erat volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna risus, pulvinar ut metus at, consequat aliquet justo. Mauris egestas aliquam ligula ut molestie",
    },
    {
      heading: "Maecenas porttitor enim nec velit ultrices?",
      paragraph:
        "Pellentesque iaculis, nisl et consectetur mattis, neque eros finibus elit, quis semper ipsum lorem vel augue. Aliquam erat volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna risus, pulvinar ut metus at, consequat aliquet justo. Mauris egestas aliquam ligula ut molestie",
    },
    {
      heading: "Maecenas porttitor enim nec velit ultrices?",
      paragraph:
        "Pellentesque iaculis, nisl et consectetur mattis, neque eros finibus elit, quis semper ipsum lorem vel augue. Aliquam erat volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna risus, pulvinar ut metus at, consequat aliquet justo. Mauris egestas aliquam ligula ut molestie",
    },
  ];

  return (
    <div className="max-w-[782px] w-full flex flex-col gap-4">
      {disclosures.map((item, index) => (
        <div
          key={index}
          className={`rounded-2xl ${
            openIndex === index
              ? "hover:shadow-custom transition duration-[0.3s]"
              : ""
          }`}
        >
          <h2
            className={`text-[#00070E] text-lg ${
              openIndex === index ? "" : "gridentBorder rounded-2xl"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleDisclosure(index)}
              className="w-full flex items-center justify-between p-5  text-[#00070E] "
            >
              <span>{item.heading}</span>
              <div>{openIndex === index ? <MinusIcon /> : <PlusIcon />}</div>
            </button>
          </h2>
          {openIndex === index && (
            <div className="p-5 pt-0 ">
              <p className="text-[#00070E] text-base">{item.paragraph}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Disclosure;

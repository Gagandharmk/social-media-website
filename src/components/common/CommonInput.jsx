const CommonInput = ({
  placeholder,
  type,
  id,
  isactive,
  value,
  onChange,
  onInputChange,
}) => {
  return (
    <div
      className={`flex items-center w-full text-lg font-urbanist whitespace-nowrap bg-white rounded-md px-4 border ${
        isactive ? "bg-white shadow-custom" : ""
      }`}
    >
      <input
        className={`text-lg h-[38px] sm:h-12 lg:h-[58px] font-urbanist outline-none w-full pr-2 bg-transparent placeholder:text-[#848484] text-black appearance-none ${
          isactive ? "placeholder:!text-[#010710] !text-[#010710]" : ""
        }`}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onInputChange(e);
          onChange(id); // Call onChange with the input ID
        }}
        required
      />
    </div>
  );
};

export default CommonInput;

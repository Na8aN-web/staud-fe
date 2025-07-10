import { useState } from "react";
import { Icon } from "../assets/icons/Icon";

export const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: "1", option: "Estate Agent" },
    { id: "2", option: "Property Developer" },
    { id: "3", option: "Property Owner" },
  ];

  const handleOptions = () => {
    setOpen((prev) => !prev);
  };

  const handleCheckOption = (id: any) => {
    setSelectedOption(id);
    setOpen(false); // optional: close dropdown on selection
  };

  return (
    <div>
      <div className="border border-white rounded-lg h-10 flex items-center justify-center mt-1">
        <div
          onClick={handleOptions}
          className="h-full w-full cursor-pointer px-3 flex flex-row justify-between items-center"
        >
          <p className="font-montserrat font-normal text-[16px] text-placeholder capitalize">
            {selectedOption
              ? options.find((opt) => opt.id === selectedOption)?.option
              : "Select staud account type"}
          </p>
          <Icon sort="arrowdown" />
        </div>
      </div>

      {open && (
        <div className="border mt-3 py-1.5 border-white rounded-lg flex flex-col items-center justify-center">
          {options.map((data) => (
            <div
              onClick={() => handleCheckOption(data.id)}
              key={data.id}
              className={`${
                selectedOption === data.id ? "bg-[#9CA9B98A]" : ""
              } hover:bg-[#9CA9B98A] flex p-2 flex-row justify-between w-full items-center cursor-pointer`}
            >
              <p className="text-[16px] font-normal font-montserrat text-labelColor">
                {data.option}
              </p>
              <Icon sort={selectedOption === data.id ? "checked" : "unchecked"} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

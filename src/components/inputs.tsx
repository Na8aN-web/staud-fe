import { useState } from "react";
import { Icon } from "../assets/icons/Icon";
import { Inputprops } from "../types";

export const TextInput = ({
  label,
  labelFont,
  value,
  onChange,
  placeholder,
  type = "text",
}: Inputprops) => {
  return (
    <div className="gap-1 flex flex-col">
      <label className={`text-labelColor font-[400] ${labelFont || ""}`}>
        {label}
      </label>
      <div className="border border-white rounded-lg h-10 flex  items-center justify-center">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full h-full  px-3  rounded-lg bg-transparent text-white outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};



export const AuthInput = ({
  label = "Password",
  labelFont,
  value,
  onChange,
  placeholder ,
  type = "password",
  errorLog,
}: Inputprops) => {
  const [openPassword, setOpenPassword] = useState(false);
  const handleToggle = () => {
    setOpenPassword((prev) => !prev);
  };
  const resolvedType = openPassword ? "text" : "password";
  return (
    <div className="gap-1 flex flex-col">
      <label className={`text-labelColor font-[400] ${labelFont || ""}`}>
        {label}
      </label>
      <div className="border border-white rounded-lg h-10 flex items-center justify-between">
        <input
          type={resolvedType}
          value={value}
          onChange={onChange}
          className="w-full h-full px-3  rounded-lg bg-transparent text-white outline-none"
          placeholder={placeholder}
        />
        <button type="button" onClick={handleToggle} className="px-3">
          <Icon sort={openPassword ? "openEye" : "hiddenEye"} />
        </button>
      </div>
      <p className="text-[14px] font-thin">{errorLog}</p>
    </div>
  );
};

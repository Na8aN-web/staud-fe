
import { ButtonProps } from "../types";



export const Button = ({
  label,
  bgVariant='primary',
  leftIcon,
  rightIcon,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <div className="">
      <button
       onClick={onClick}
        className={`flex items-center gap-2 justify-center px-5 py-2 rounded-lg outline-none hover:bg-opacity-90 duration-500 transition-all ${className}
      ${
        bgVariant === "primary"
          ? "bg-primarycolor text-white"
          : bgVariant === "secondary"
          ? "bg-secondarycolor text-white rounded-xl"
          : bgVariant === "outline"
          ? "border-secondarycolor text-secondarycolor border"
          : bgVariant === "grey"
          ? "bg-outline_grey text-secondarycolor"
          : ""
      }        
        `}
      >
        <span>{leftIcon}</span>
        {label}
        <span>{rightIcon}</span>
      </button>
    </div>
  );
};

import { useState } from "react";
import { CheckBoxProps } from "../types";



export const CheckBox = ({width, height}: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);


  const handleChecked = (e: any) => {
    e.preventDefault();
    setChecked((prev) => !prev);
  };
  return (
    <button onClick={handleChecked}>
      {checked ? (
        <svg
          width={width ? width :"24"}
          height={height ? height :"24"}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#0B407A" />
          <path
            d="M6.75 12.75L10.25 16.25L17.25 8.75"
            stroke="#F68920"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
           width={width ? width :"24"}
          height={height ? height :"24"}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="3.5"
            stroke="white"
          />
        </svg>
      )}
    </button>
  );
};

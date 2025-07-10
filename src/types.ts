import { ReactNode } from "react";

export interface IconProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  fill?: string;
}

export interface ButtonProps {
  label: string;
  bgVariant: "primary" | "secondary" | "outline" | "grey";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string | any;
  onClick: () => void;
}

export interface Inputprops {
  label: string;
  labelFont?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: "text" | "password" | "email" | "number"; 
  errorLog?: string;
}

export interface CheckBoxProps  {
height?: string | number ;
width?: string | number ;

}
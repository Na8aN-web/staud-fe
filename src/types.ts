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
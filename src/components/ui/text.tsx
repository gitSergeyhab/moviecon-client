import { cn } from "@/lib/utils/styles";
import React, { FC } from "react";

interface TextProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  color?: string;
  bg?: string;
  className?: string;
  range?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const Text: FC<TextProps> = ({ tag = "p", color, bg, className, children }) => {
  const baseClasses = ["h1", "h2", "h3"].includes(tag)
    ? "font-bold"
    : "font-normal";
  const colorClass = color ? `text-${color}` : "";
  const bgClass = bg ? `bg-${bg}` : "";
  const classes = cn(baseClasses, colorClass, bgClass, className);

  const HeaderTag = tag as keyof JSX.IntrinsicElements;
  return <HeaderTag className={classes}>{children}</HeaderTag>;
};

export default Text;

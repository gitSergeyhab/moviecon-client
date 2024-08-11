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

export const Text: FC<TextProps> = ({ tag = "p", className, children }) => {
  const baseClasses = ["h1", "h2", "h3"].includes(tag)
    ? "font-bold"
    : "font-normal";

  const classes = cn(baseClasses, className);

  const HeaderTag = tag as keyof JSX.IntrinsicElements;
  return <HeaderTag className={classes}>{children}</HeaderTag>;
};

export const PrimaryText: FC<TextProps> = ({ children, className }) => (
  <Text tag="p" className={cn("text-xl md:text-2xl", className)}>
    {children}
  </Text>
);

export const TitleText: FC<TextProps> = ({ children, className }) => (
  <Text tag="p" className={cn("text-3xl md:text-5xl font-bold", className)}>
    {children}
  </Text>
);

export const SecondaryText: FC<TextProps> = ({ children, className }) => (
  <Text tag="p" className={cn("text-lg md:text-xl", className)} color="primary">
    {children}
  </Text>
);

export const PrimaryHeader: FC<TextProps> = ({ children, className }) => (
  <Text
    tag="h1"
    className={cn("text-2xl md:text-4xl", className)}
    color="primary"
  >
    {children}
  </Text>
);

export const SecondaryHeader: FC<TextProps> = ({ children, className }) => (
  <Text
    tag="h2"
    className={cn("text-lg md:text-2xl ", className)}
    color="primary"
  >
    {children}
  </Text>
);
export const ItemHeader: FC<TextProps> = ({ children, className }) => (
  <Text tag="h3" className={cn("md:text-xl", className)} color="primary">
    {children}
  </Text>
);

export const PaleText: FC<TextProps> = ({ children, className }) => (
  <Text
    tag="p"
    className={cn("text-xs  md:text-lg opacity-70 font-semibold", className)}
  >
    {children}
  </Text>
);

import { FC } from "react";
import SpinnerIcon from "./icons/spinner";
import SpinnerIcon2 from "./icons/spinner2";
import { cn } from "@/lib/utils/styles";

export type SpinnerSize = "2xs" | "xs" | "sm" | "l" | "lg" | "xl" | "2xl";

const classes: Record<
  SpinnerSize,
  { wrapper: string; middle: string; inner: string }
> = {
  "2xl": {
    inner: "p-24",
    middle: "p-12",
    wrapper: "h-60 w-60",
  },
  xl: {
    inner: "p-20",
    middle: "p-10",
    wrapper: "h-48 w-48",
  },
  lg: {
    inner: "p-16",
    middle: "p-10",
    wrapper: "h-40 w-40",
  },
  l: {
    inner: "p-12",
    middle: "p-6",
    wrapper: "h-32 w-32",
  },
  sm: {
    inner: "p-8",
    middle: "p-5",
    wrapper: "h-24 w-24",
  },
  xs: {
    inner: "p-6",
    middle: "p-3",
    wrapper: "h-16 w-16",
  },
  "2xs": {
    inner: "p-4",
    middle: "p-2",
    wrapper: "h-10 w-10",
  },
};

export interface SpinnerProps {
  size: SpinnerSize;
  variant?: "first" | "second";
}

export const Spinner: FC<SpinnerProps> = ({ size, variant }) => {
  const { inner, middle, wrapper } = classes[size];
  const SpinnerEl = variant === "first" ? SpinnerIcon : SpinnerIcon2;
  return (
    <div className={cn("relative", wrapper)}>
      <SpinnerEl
        className={cn(
          "animate-spin w-full absolute will-change-transform delay-200",
          inner
        )}
      />
      <SpinnerEl
        className={cn(
          "animate-spin-back w-full absolute will-change-transform rotate-180 opacity-85 delay-100",
          middle
        )}
      />
      <SpinnerEl
        className={
          "animate-spin w-full absolute will-change-transform opacity-70"
        }
      />
    </div>
  );
};

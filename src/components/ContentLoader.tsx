import { FC } from "react";
import { Spinner, SpinnerSize } from "./Spinner";
import { cn } from "@/lib/utils/styles";
interface ContentLoaderProps {
  size?: SpinnerSize;
  className?: string;
}
export const ContentLoader: FC<ContentLoaderProps> = ({
  size = "lg",
  className,
}) => (
  <div className={cn("w-full flex items-center justify-center", className)}>
    <Spinner size={size} />
  </div>
);

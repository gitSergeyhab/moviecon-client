import { FC } from "react";

interface PrimaryBlockProps {
  text: string | number;
  enText?: string | null | number;
}

export const PrimaryBlock: FC<PrimaryBlockProps> = ({ text, enText }) => {
  return (
    <div className="flex flex-col items-center text-center justify-center font-bold drop-shadow-md sm:px-4 sm:pb-1">
      <h3 className="drop-shadow-lg sm:text-2xl">{text}</h3>
      <p className="opacity-55 hidden sm:block">{enText}</p>
    </div>
  );
};

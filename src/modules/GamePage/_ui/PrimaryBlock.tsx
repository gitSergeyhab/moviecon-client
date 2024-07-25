import { FC } from "react";

interface PrimaryBlockProps {
  text: string | number;
  enText?: string | null | number;
}

export const PrimaryBlock: FC<PrimaryBlockProps> = ({ text, enText }) => {
  return (
    <div className="font-bold sm:px-4 sm:pb-1 flex flex-col items-center text-center justify-center drop-shadow-md">
      <h3 className="sm:text-2xl drop-shadow-lg">{text}</h3>
      <p className="opacity-55 hidden sm:block">{enText}</p>
    </div>
  );
};

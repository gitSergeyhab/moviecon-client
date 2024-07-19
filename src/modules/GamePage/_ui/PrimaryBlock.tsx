import { FC } from "react";

interface PrimaryBlockProps {
  text: string | number;
  enText?: string | null | number;
}

export const PrimaryBlock: FC<PrimaryBlockProps> = ({ text, enText }) => {
  return (
    <div className="font-bold px-4 pb-4 flex flex-col items-center text-center justify-center">
      <h3 className="sm:text-2xl">{text}</h3>
      <p className="opacity-55">{enText}</p>
    </div>
  );
};

import { FC } from "react";

interface SecondaryBlockProps {
  text?: string | null | number;
}

export const SecondaryBlock: FC<SecondaryBlockProps> = ({ text }) => {
  return (
    <p className="px-8 py-2 opacity-90 text-center font-semibold italic">
      {text}
    </p>
  );
};

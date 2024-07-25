import Text from "@/components/ui/text";
import { FC } from "react";

interface SecondaryBlockProps {
  text?: string | null | number;
}

export const SecondaryBlock: FC<SecondaryBlockProps> = ({ text }) => {
  return (
    <Text
      tag="p"
      className="text-xs  md:text-lg opacity-90 text-center font-semibold italic"
    >
      {text}
    </Text>
  );
};

import { FC } from "react";
import { Description } from "./types";
import { Button } from "@/components/ui/button";
import { SecondaryText } from "@/components/ui/text";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils/styles";

export interface DescriptionItemProps {
  description: Description;
  onClick: VoidFunction;
  openId: number | null;
}

export const DescriptionItem: FC<DescriptionItemProps> = ({
  description,
  onClick,
  openId,
}) => {
  const { id, paragraphs, title } = description;
  return (
    <li>
      <Button className="w-full my-1 flex justify-between" onClick={onClick}>
        <SecondaryText className="font-bold">{title}</SecondaryText>
        <ChevronDownIcon className={cn(id === openId && "rotate-180")} />
      </Button>
      <div
        className={cn(
          "indent-8 h-0 overflow-hidden transition-all  duration-300 hide-scrollbar flex flex-col justify-evenly",
          id === openId && "h-[280px] sm:h-[300px] md:h-[320px] overflow-auto"
        )}
      >
        {paragraphs.map((paragraph, i) => (
          <SecondaryText
            className="text-xs sm:text-sm md:text-base lg:text-lg"
            key={i}
          >
            {paragraph}
          </SecondaryText>
        ))}
      </div>
    </li>
  );
};

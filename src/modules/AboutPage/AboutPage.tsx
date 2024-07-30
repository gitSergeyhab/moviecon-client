import { FC, useState } from "react";
import { PrimaryHeader } from "@/components/ui/text";
import { aboutData } from "./const";
import { DescriptionItem } from "./DescriptionItem";
import { LinksSection } from "./LinksSection";
// TODO киномеханик разглядывающий в лупу пленку

const AboutPage: FC = () => {
  const [openId, setOpenId] = useState<null | number>(null);
  const onClick = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <div className="rounded-lg max-w-[1200px] m-auto mb-16 ">
      <div className=" bg-neutral-200/90 dark:bg-neutral-900/90 py-2 md:py-16 rounded-lg md:p-24 min-h-[600px] md:min-h-[880px] flex flex-col gap-2">
        <PrimaryHeader className="text-center mb-2 md:mb-6 ">
          О проекте
        </PrimaryHeader>
        <ul className="p-2 border-4 border-neutral-800 dark:border-neutral-200 rounded-md">
          {aboutData.map((description) => (
            <DescriptionItem
              key={description.id}
              description={description}
              onClick={() => onClick(description.id)}
              openId={openId}
            />
          ))}
        </ul>
        <LinksSection />
      </div>
    </div>
  );
};

export default AboutPage;

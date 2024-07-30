import { FC } from "react";
import { MainTableSection } from "./MainTablesSection";
import { StartGameSection } from "./StartGameSection";
import {
  PrimaryHeader,
  PrimaryText,
  SecondaryText,
} from "@/components/ui/text";
import { features } from "./const";
import { FeatureListItem } from "./FeatureListItem";
import { useTitle } from "@/hooks/useTitle";
import { MAIN_TITLE } from "@/const/title";

const MainPage: FC = () => {
  useTitle(MAIN_TITLE, false);
  return (
    <div
      className="max-w-[1600px] mx-auto  p-4 sm:p-8 sm:pb-16 pb-12  px-0  rounded-lg bg-neutral-200/70 dark:bg-neutral-800/70  
  flex flex-wrap gap-4"
    >
      <div className="col-span-2 rounded-lg w-full ">
        <div className="flex justify-center">
          <div
            className="p-8 border-4 border-neutral-800 dark:border-neutral-200 min-w-min 
            drop-shadow-[0_1px_4px_rgb(0,0,0)] dark:drop-shadow-[0_4px_4px_rgb(200,200,200)]
            scale-100 animate-blink"
          >
            <PrimaryHeader
              className="
              dark:drop-shadow-[0_1px_4px_rgb(0,0,0)] drop-shadow-[0_4px_4px_rgb(250,250,250)]
              text-center md:text-6xl uppercase text-4xl font-bold"
            >
              MovieCon
            </PrimaryHeader>
          </div>
        </div>
        <section className="mt-8  p-4 sm:p-8 rounded-md bg-neutral-200/50 dark:bg-neutral-800/50 ">
          <h2 className="hidden">описание игры</h2>
          <PrimaryText className=" font-bold">
            Добро пожаловать в мир кино!{" "}
          </PrimaryText>
          <SecondaryText className="mt-2 font-bold">
            Испытайте свои знания кино в нашей увлекательной игре! Здесь вы
            сможете проверить, насколько хорошо вы знаете актеров и фильмы
          </SecondaryText>

          <PrimaryText className="font-bold mt-2"> Что вас ждет: </PrimaryText>

          <ul className="">
            {features.map((feature) => (
              <FeatureListItem key={feature.feature} {...feature} />
            ))}
          </ul>
          <PrimaryText className="font-bold mt-2">
            Начните прямо сейчас и проверьте свои знания. Удачи!
          </PrimaryText>
        </section>
        <MainTableSection />
        <StartGameSection />
      </div>
    </div>
  );
};

export default MainPage;

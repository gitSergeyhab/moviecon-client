import Text from "@/components/ui/text";
import { FC } from "react";
import { MainTableSection } from "./MainTablesSection";
import { StartGameSection } from "./StartGameSection";

const MainPage: FC = () => {
  return (
    <div
      className="max-w-[1600px] mx-auto mt-8 px-0 sm:px-8 pb-12 pt-4 rounded-lg bg-neutral-200/70 dark:bg-neutral-800/70  
  flex flex-wrap gap-4"
    >
      <div className="col-span-2 sm:p-4 p-2 rounded-lg w-full">
        <div className="flex justify-center">
          <Text
            tag="h1"
            className="text-center sm:text-5xl uppercase text-3xl font-bold   
            drop-shadow-[0_1px_4px_rgb(0,0,0)] dark:drop-shadow-[0_4px_4px_rgb(200,200,200)]
             p-8 border-4 border-neutral-800 dark:border-neutral-200 min-w-min 
              scale-100 animate-blink
             "
          >
            MovieCon
          </Text>
        </div>

        <MainTableSection />
        <StartGameSection />
      </div>
    </div>
  );
};

export default MainPage;

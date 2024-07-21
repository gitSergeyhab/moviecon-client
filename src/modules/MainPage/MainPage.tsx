import Text from "@/components/ui/text";
import { FC } from "react";

const MainPage: FC = () => {
  return (
    <div
      className="max-w-[1600px] mx-auto mt-8 px-0 sm:px-8 pb-12 pt-4 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50  
  flex flex-wrap gap-4"
    >
      <div className="col-span-2 sm:p-4 p-2 rounded-lg w-full">
        <Text tag="h1" className="text-center sm:text-3xl text-xl">
          MovieCon
        </Text>
        <section>
          <Text tag="h2" className="text-center sm:text-2xl text-l mt-16">
            Наши рекордсмены
          </Text>

          <Text tag="p" className="text-center sm:text-2xl text-l mt-16">
            Начни игру, чтоб оказаться в их числе
          </Text>
        </section>
      </div>
    </div>
  );
};

export default MainPage;

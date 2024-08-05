import { FC } from "react";

export const MainImage: FC = () => {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-800  border-neutral-800  dark:border-neutral-200 aspect-[3/2]  w-full mt-8 md:mt-16  p-2 md:p-16 border-4 rounded-xl">
      <img
        src="/img/sd/moviecon.webp"
        alt="main moviecon image"
        // width={768}
        // height={512}
        // className="mt-8 md:mt-16 w-full h-auto max-w-[768px] max-h-[512px] m-auto rounded-lg object-cover"
        className="w-full h-auto m-auto rounded-lg object-cover"
      />
    </div>
  );
};

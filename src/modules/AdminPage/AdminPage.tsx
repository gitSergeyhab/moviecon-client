import { PrimaryText } from "@/components/ui/text";
import { FC } from "react";

const AdminPage: FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto  p-4 sm:p-8 sm:pb-16 pb-12  px-0  rounded-lg bg-neutral-200/70 dark:bg-neutral-800/70 flex flex-wrap gap-4">
      <div className="flex flex-col gap-10 rounded-lg w-full ">
        <PrimaryText className="text-3xl md:text-5xl font-bold text-center">
          TODO ADMIN PANEL!
        </PrimaryText>
      </div>
    </div>
  );
};

export default AdminPage;

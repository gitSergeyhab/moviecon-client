import { PrimaryText } from "@/components/ui/text";
import { FC } from "react";

const AdminPage: FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto  bg-neutral-200/70 dark:bg-neutral-800/70 min-h-screen flex flex-wrap w-full justify-center items-center rounded-lg">
      <PrimaryText className="text-3xl md:text-5xl font-bold text-center">
        TODO ADMIN PANEL!
      </PrimaryText>
    </div>
  );
};

export default AdminPage;

import { FC } from "react";
import { UserResultsSection } from "./Result/UserResultsSection";
import { getUser, getUserStatus } from "@/store/user/selectors";
import { useSelector } from "react-redux";
import { PrimaryHeader, PrimaryText } from "@/components/ui/text";
import { UserRecordsSection } from "./Record/UserRecordsSection";
import { ContentLoader } from "@/components/ContentLoader";
import { useTitle } from "@/hooks/useTitle";

export const ProfilePage: FC = () => {
  const user = useSelector(getUser);

  useTitle(user?.name || "Профиль");

  const loading = useSelector(getUserStatus) === "loading";
  if (loading) {
    return (
      <ContentLoader
        size="2xl"
        className="bg-neutral-500/50 max-w-[1200px] mx-auto min-h-96 "
      />
    );
  }
  if (!user) return null;
  return (
    <div className=" bg-neutral-200/50 dark:bg-neutral-800/50 flex flex-wrap gap-4 max-w-[1600px] mx-auto mt-8 px-0 pb-12 pt-4 rounded-lg sm:px-8">
      <div className="col-span-2 w-full p-2 rounded-lg sm:p-4">
        <PrimaryHeader className="text-center">
          Страница профиля пользователя
        </PrimaryHeader>
        <PrimaryText className="text-center font-bold">{user.name}</PrimaryText>
        {/* // TODO add user avatar */}
      </div>
      <div className="grid grid-cols-1 w-full gap-8 lg:grid-cols-2 ">
        <UserRecordsSection />
        <UserResultsSection />
      </div>
    </div>
  );
};

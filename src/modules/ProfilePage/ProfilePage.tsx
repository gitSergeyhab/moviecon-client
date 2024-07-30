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
        className="max-w-[1200px] mx-auto min-h-96 bg-neutral-500/50"
      />
    );
  }
  if (!user) return null;
  return (
    <div
      className="max-w-[1600px] mx-auto mt-8 px-0 sm:px-8 pb-12 pt-4 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50  
    flex flex-wrap gap-4"
    >
      <div className="col-span-2 sm:p-4 p-2 rounded-lg w-full">
        <PrimaryHeader className="text-center">
          Страница профиля пользователя
        </PrimaryHeader>
        <PrimaryText className="text-center font-bold">{user.name}</PrimaryText>
        {/* // TODO add user avatar */}
      </div>
      <UserRecordsSection />
      <UserResultsSection />
    </div>
  );
};

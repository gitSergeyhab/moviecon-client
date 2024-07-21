import { FC } from "react";
import { UserResultsSection } from "./Result/UserResultsSection";
import { getUser, getUserStatus } from "@/store/user/selectors";
import { useSelector } from "react-redux";
import { Spinner } from "@/components/Spinner";
import Text from "@/components/ui/text";
import { UserRecordsSection } from "./Record/UserRecordsSection";

export const ProfilePage: FC = () => {
  const user = useSelector(getUser);
  const loading = useSelector(getUserStatus) === "loading";
  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 pb-12 pt-4 rounded-lg bg-neutral-500/50">
        <Spinner size="2xl" />
      </div>
    );
  }
  if (!user) return null;
  return (
    <div
      className="max-w-[1600px] mx-auto mt-8 px-0 sm:px-8 pb-12 pt-4 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50  
    flex flex-wrap gap-4"
    >
      <div className="col-span-2 sm:p-4 p-2 rounded-lg w-full">
        <Text tag="h1" className="text-center sm:text-3xl text-xl">
          Страница профиля пользователя
        </Text>
        <Text tag="p" className="text-center sm:text-3xl text-xl font-bold">
          {user.name}
        </Text>
        {/* // TODO add user avatar */}
      </div>
      <UserRecordsSection />
      <UserResultsSection />
    </div>
  );
};

import { Spinner } from "@/components/Spinner";
import { AppLink } from "@/components/ui/AppLink";
import Text from "@/components/ui/text";
import appRoutes from "@/lib/configs/routes/routes";
import { getUser, getUserStatus } from "@/store/user/selectors";
import { FC } from "react";
import { useSelector } from "react-redux";

export const StartGameSection: FC = () => {
  const user = useSelector(getUser);
  const loading = useSelector(getUserStatus) === "loading";

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 pb-12 pt-4 rounded-lg bg-neutral-500/50">
        <Spinner size="xl" />
      </div>
    );
  }
  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="hidden">Начать игру</h1>
      <Text tag="p" className="text-center sm:text-2xl text-l mt-16 font-bold">
        Начни игру, чтоб оказаться в их числе
      </Text>

      <AppLink
        to={user ? appRoutes.gameSelection : appRoutes.auth.register}
        className="p-2 px-4 text-xl border-2 border-neutral-800 dark:border-neutral-200"
      >
        {user ? "Играть" : "Зарегистрироваться"}
      </AppLink>
    </section>
  );
};

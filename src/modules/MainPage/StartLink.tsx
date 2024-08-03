import { Spinner } from "@/components/Spinner";
import { AppLink } from "@/components/ui/AppLink";
import appRoutes from "@/lib/configs/routes/routes";
import { getUser, getUserStatus } from "@/store/user/selectors";
import { FC } from "react";
import { useSelector } from "react-redux";

export const StartLink: FC = () => {
  const user = useSelector(getUser);
  const loading = useSelector(getUserStatus) === "loading";

  const buttonText = user ? "Играть" : "Зарегистрироваться";
  return (
    <AppLink
      to={user ? appRoutes.gameSelection : appRoutes.auth.register}
      className="text-xl border-2 border-neutral-800 dark:border-neutral-200 flex justify-center items-center w-full h-12"
    >
      {loading ? <Spinner size="2xs" /> : buttonText}
    </AppLink>
  );
};

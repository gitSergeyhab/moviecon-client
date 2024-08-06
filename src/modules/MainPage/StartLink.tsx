import { FC } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "@/components/Spinner";
import { AppLink } from "@/components/ui/AppLink";
import appRoutes from "@/lib/configs/routes/routes";
import { userSelectors } from "@/store/user";

export const StartLink: FC = () => {
  const user = useSelector(userSelectors.getUser);
  const loading = useSelector(userSelectors.getUserStatus) === "loading";

  const buttonText = user ? "Играть" : "Зарегистрироваться";
  return (
    <AppLink
      to={user ? appRoutes.gameSelection : appRoutes.auth.register}
      className="border-neutral-800 dark:border-neutral-200 flex justify-center items-center text-xl border-2 w-full h-12"
    >
      {loading ? <Spinner size="2xs" /> : buttonText}
    </AppLink>
  );
};

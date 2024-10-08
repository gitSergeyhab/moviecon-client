import { Button } from "@/components/ui/button";
import { PrimaryHeader } from "@/components/ui/text";
import { useTitle } from "@/hooks/useTitle";
import appRoutes from "@/lib/configs/routes/routes";
import { cn } from "@/lib/utils/styles";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  useTitle("Страница не найдена");

  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "dark:from-neutral-950/90 dark:via-neutral-800/90 dark:to-neutral-600/90 from-neutral-100/95 via-neutral-300/90 to-neutral-500/90 bg-gradient-to-r",
        "flex flex-col items-center justify-center m-auto min-h-[840px] max-w-[1600px] rounded-3xl"
      )}
    >
      <div className="dark:bg-neutral-300/50 bg-neutral-800/70 flex flex-col items-center text-center p-8 rounded-lg shadow-xl">
        <PrimaryHeader className="text-9xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r drop-shadow-lg">
          404
        </PrimaryHeader>
        <p className="text-2xl font-bold mb-8 drop-shadow-md text-center max-w-lg">
          Похоже, этой страницы не существует.
        </p>
        <div className="flex space-x-4">
          <Button variant={"gradient"} size={"lg"} onClick={() => navigate(-1)}>
            назад
          </Button>
          <Button
            variant={"gradient"}
            size={"lg"}
            onClick={() => navigate(appRoutes.main)}
          >
            на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

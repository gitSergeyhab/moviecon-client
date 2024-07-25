import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import appRoutes from "@/lib/configs/routes/routes";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[840px] max-w-[1600px] rounded-3xl m-auto flex flex-col items-center justify-center bg-gradient-to-r dark:from-neutral-950/90 dark:via-neutral-800/90 dark:to-neutral-600/90 from-neutral-100/95 via-neutral-300/90 to-neutral-500/90">
      <div className="text-center flex flex-col items-center dark:bg-neutral-300/50 bg-neutral-800/70 p-8 rounded-lg shadow-xl">
        <Text
          tag="h1"
          className="text-9xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r  drop-shadow-lg"
        >
          404
        </Text>
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

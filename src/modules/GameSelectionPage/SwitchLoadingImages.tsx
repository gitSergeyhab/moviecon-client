import { Switch } from "@/components/ui/switch";
import { SecondaryText } from "@/components/ui/text";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import LoadingImagesService from "@/lib/utils/storage-services/LoadingImagesService";
import { gameActions, gameSelectors } from "@/store/game";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const SwitchLoadingImages = () => {
  const dispatch = useAppDispatch();
  const isChecked = useSelector(gameSelectors.getIsLoadingImages);

  useEffect(() => {
    dispatch(gameActions.setImgPreloading(LoadingImagesService.mode));
  }, [dispatch]);

  const handleChangeMode = () => {
    LoadingImagesService.mode = !isChecked;
    dispatch(gameActions.setImgPreloading(!isChecked));
  };

  return (
    <div className="flex items-center">
      <Switch
        checked={isChecked}
        className="border-neutral-800 dark:border-neutral-200 border-2"
        onCheckedChange={handleChangeMode}
      />
      <SecondaryText className="text-xs max-w-64 p-2 md:text-sm">
        Включить предзагрузку всех картинок перед началом уровня
      </SecondaryText>
    </div>
  );
};

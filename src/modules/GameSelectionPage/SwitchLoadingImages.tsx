import { Switch } from "@/components/ui/switch";
import { SecondaryText } from "@/components/ui/text";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import LoadingImagesService from "@/lib/utils/storage-services/LoadingImagesService";
import { getIsLoadingImages } from "@/store/game/selectors";
import { setImgPreloading } from "@/store/game/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const SwitchLoadingImages = () => {
  const dispatch = useAppDispatch();
  const isChecked = useSelector(getIsLoadingImages);

  useEffect(() => {
    dispatch(setImgPreloading(LoadingImagesService.mode));
  }, [dispatch]);

  const handleChangeMode = () => {
    LoadingImagesService.mode = !isChecked;
    dispatch(setImgPreloading(!isChecked));
  };

  return (
    <div className="flex items-center">
      <Switch
        checked={isChecked}
        className="border-2 border-neutral-800 dark:border-neutral-200"
        onCheckedChange={handleChangeMode}
      />
      <SecondaryText className="text-xs md:text-sm max-w-64 p-2">
        Включить предзагрузку всех картинок перед началом уровня
      </SecondaryText>
    </div>
  );
};

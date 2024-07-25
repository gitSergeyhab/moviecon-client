import { FC } from "react";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";

export interface ConfirmExitGameProps {
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
}

export const ConfirmExitGame: FC<ConfirmExitGameProps> = ({
  onCancel,
  onConfirm,
}) => {
  return (
    <div className="w-96 bg-neutral-300 dark:bg-neutral-800 border-8 rounded-lg border-neutral-800  dark:border-neutral-300 p-8 m-auto">
      <Text className="font-bold italic text-center text-lg">
        Вы уверены, что хотите завершить игру?
      </Text>
      <div className="flex justify-between pt-4">
        <Button type="button" variant={"outline"} onClick={onCancel}>
          Отмена
        </Button>
        <Button type="button" variant={"destructive"} onClick={onConfirm}>
          Завершить
        </Button>
      </div>
    </div>
  );
};

import { Form } from "@/components/ui/form/form";
import { useAppForm } from "@/hooks/useAppForm";
import { requestStartGame$ } from "@/lib/api/game";
import { setFormErrors } from "@/lib/utils/errors";
import {
  GameSelectionSchema,
  GameSelectionSchemaType,
} from "@/schemas/gameSelection";
import { ApiError } from "@/type/api";
import { AnyDict } from "@/type/dict";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categoryOptions, durationOptions, title } from "./const";
import { FormRadioGroup } from "@/components/ui/form/form-radio-group";
import { Fieldset } from "@/components/ui/fieldset";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { resetGame, startGame } from "@/store/game/store";
import { useTitle } from "@/hooks/useTitle";
import { SwitchLoadingImages } from "./SwitchLoadingImages";

const GameSelectionPage: FC = () => {
  const form = useAppForm(GameSelectionSchema);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useTitle(title);

  useEffect(() => {
    dispatch(resetGame());
  }, [dispatch]);

  const onSubmit = async (data: AnyDict) => {
    try {
      const response = await requestStartGame$(data as GameSelectionSchemaType);
      dispatch(startGame(response));
      navigate(response.gameId);
    } catch (e) {
      setFormErrors(e as ApiError, form.setError);
    }
  };

  return (
    <div className="flex flex-col items-center m-auto max-w-[1200px]">
      <h1 className="invisible h-0">{title}</h1>
      <Form
        form={form}
        onSubmit={onSubmit}
        className="bg-background-opacity flex flex-col items-center w-[480px] max-w-full p-4 rounded-md"
        submitTitle="Начать Игру"
        name="Выберите игру"
      >
        <Fieldset name="Категория">
          <FormRadioGroup
            defaultValue="all"
            field="category"
            form={form}
            options={categoryOptions}
          />
        </Fieldset>

        <Fieldset name="Длительность">
          <FormRadioGroup
            defaultValue="COMMON"
            field="duration"
            form={form}
            options={durationOptions}
          />
        </Fieldset>
        <SwitchLoadingImages />
      </Form>
    </div>
  );
};

export default GameSelectionPage;

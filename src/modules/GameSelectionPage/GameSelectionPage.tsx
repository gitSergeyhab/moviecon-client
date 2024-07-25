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
import { categoryOptions, durationOptions } from "./const";
import { FormRadioGroup } from "@/components/ui/form/form-radio-group";
import { Fieldset } from "@/components/ui/fieldset";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { resetGame, startGame } from "@/store/game/store";

const GameSelectionPage: FC = () => {
  const form = useAppForm(GameSelectionSchema);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    <div className="m-auto max-w-[1200px] flex flex-col items-center">
      <Form
        form={form}
        onSubmit={onSubmit}
        className=" bg-background-opacity w-[480px] max-w-full p-4 rounded-md flex flex-col items-center"
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

        <Fieldset name="Длительность" className="my-4">
          <FormRadioGroup
            defaultValue="COMMON"
            field="duration"
            form={form}
            options={durationOptions}
          />
        </Fieldset>
      </Form>
    </div>
  );
};

export default GameSelectionPage;

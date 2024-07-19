import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form/form";
import { FormInput } from "@/components/ui/form/form-input";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppForm } from "@/hooks/useAppForm";
import { requestRegister } from "@/lib/api/auth";
import { setFormErrors } from "@/lib/utils/errors";
import TokenService from "@/lib/utils/tokenService";
import { RegisterSchema, RegisterSchemaType } from "@/schemas/register";
import { setUser } from "@/store/user/store";
import { ApiError } from "@/type/api";
import { AnyDict } from "@/type/dict";

const RegisterPage: FC = () => {
  const form = useAppForm(RegisterSchema);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: AnyDict) => {
    try {
      const response = await requestRegister(data as RegisterSchemaType);
      const { tokens, ...user } = response;
      dispatch(setUser(user));
      TokenService.accessToken = tokens.access;
      TokenService.refreshToken = tokens.refresh;
      navigate("/");
    } catch (e) {
      setFormErrors(e as ApiError, form.setError);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Form
        form={form}
        onSubmit={onSubmit}
        name="Регистрация"
        submitTitle="Регистрация"
        className="bg-background-opacity"
      >
        <FormInput field="email" form={form} label="Email" type="email" />
        <FormInput field="name" form={form} label="Имя" />
        <FormInput
          field="password"
          form={form}
          label="Пароль"
          type="password"
        />
        <FormInput
          field="repeatPassword"
          form={form}
          label="Повторите пароль"
          type="password"
        />
      </Form>
    </div>
  );
};
export default RegisterPage;

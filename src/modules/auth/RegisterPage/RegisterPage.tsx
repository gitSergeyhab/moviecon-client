import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form/form";
import { FormInput } from "@/components/ui/form/form-input";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppForm } from "@/hooks/useAppForm";
import { requestRegister } from "@/lib/api/auth";
import { setFormErrors } from "@/lib/utils/errors";
import TokenService from "@/lib/utils/storage-services/tokenService";
import { RegisterSchema, RegisterSchemaType } from "@/schemas/register";
import { ApiError } from "@/type/api";
import { AnyDict } from "@/type/dict";
import { AuthFormLayout } from "../AuthFormLayout";
import appRoutes from "@/lib/configs/routes/routes";
import { AppLink } from "@/components/ui/AppLink";
import { userActions } from "@/store/user";

const RegisterPage: FC = () => {
  const form = useAppForm(RegisterSchema);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: AnyDict) => {
    try {
      const response = await requestRegister(data as RegisterSchemaType);
      const { tokens, ...user } = response;
      dispatch(userActions.setUser(user));
      TokenService.accessToken = tokens.access;
      TokenService.refreshToken = tokens.refresh;
      navigate("/");
    } catch (e) {
      setFormErrors(e as ApiError, form.setError);
    }
  };

  return (
    <AuthFormLayout>
      <Form
        form={form}
        onSubmit={onSubmit}
        name="Регистрация"
        submitTitle="Регистрация"
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
      <AppLink to={appRoutes.auth.login}>уже есть аккаунт</AppLink>
    </AuthFormLayout>
  );
};
export default RegisterPage;

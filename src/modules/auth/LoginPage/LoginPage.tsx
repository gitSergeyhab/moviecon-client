import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form/form";
import { FormInput } from "@/components/ui/form/form-input";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppForm } from "@/hooks/useAppForm";
import { requestLogin } from "@/lib/api/auth";
import { setFormErrors } from "@/lib/utils/errors";
import TokenService from "@/lib/utils/tokenService";
import { LoginSchema, LoginSchemaType } from "@/schemas/login";
import { setUser } from "@/store/user/store";
import { ApiError } from "@/type/api";
import { AnyDict } from "@/type/dict";
import appRoutes from "@/lib/configs/routes/routes";
import { AuthFormLayout } from "../AuthFormLayout";
import { AppLink } from "@/components/ui/AppLink";

const LoginPage: FC = () => {
  const form = useAppForm(LoginSchema);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: AnyDict) => {
    try {
      const response = await requestLogin(data as LoginSchemaType);
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
    <AuthFormLayout>
      <Form form={form} onSubmit={onSubmit} name="Вход" submitTitle="Войти">
        <FormInput field="email" form={form} label="Email" type="email" />
        <FormInput
          field="password"
          form={form}
          label="Пароль"
          type="password"
        />
      </Form>
      <AppLink to={appRoutes.auth.register}>еще нет аккаунта</AppLink>
    </AuthFormLayout>
  );
};

export default LoginPage;

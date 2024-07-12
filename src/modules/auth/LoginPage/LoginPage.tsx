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
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: FC = () => {
  const form = useAppForm(LoginSchema);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: AnyDict) => {
    console.log("onSubmit");
    try {
      const response = await requestLogin(data as LoginSchemaType);
      const { tokens, ...user } = response;
      dispatch(setUser(user));
      TokenService.accessToken = tokens.access;
      TokenService.refreshToken = tokens.refresh;
      console.log({ response });
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
        name="Вход"
        submitTitle="Войти"
        className="bg-background-opacity"
      >
        <FormInput field="email" form={form} label="Email" type="email" />
        <FormInput
          field="password"
          form={form}
          label="Пароль"
          type="password"
        />
      </Form>
    </div>
  );
};

export default LoginPage;

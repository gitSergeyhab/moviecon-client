"use client";

import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { PropsWithChildren } from "react";
import { Button } from "../button";
import { cn } from "@/lib/utils/styles";
import { AnyDict } from "@/type/dict";
// import { ZodString } from "zod";

// type Dict = Record<string, ZodString>;

interface FormProps<T extends AnyDict> extends PropsWithChildren {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  name?: string;
  className?: string;
  submitTitle?: string;
}

// const form: UseFormReturn<{
//   name: string;
//   email: string;
//   password: string;
//   repeatPassword: string;
// }, any, undefined>

export const Form = <T extends AnyDict>({
  form,
  children,
  onSubmit,
  name,
  className,
  submitTitle,
}: FormProps<T>) => {
  const { formState, handleSubmit } = form;
  const { isSubmitting } = formState;
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      // onSubmit={handleSubmit(
      //   (d) => console.log({ d }),
      //   (e) => console.log({ e })
      // )}
      className={cn(
        "max-w-md mx-auto bg-white p-6 rounded-md shadow-[0_35px_80px_15px_rgba(0,0,0,0.9)]",
        className
      )}
    >
      <h2 className="text-2xl mb-6 text-center text-primary font-bold">
        {name}
      </h2>
      {children}
      <Button
        type="submit"
        //  disabled={!isValid || isSubmitting}
        disabled={isSubmitting}
        className="w-full font-bold"
      >
        {submitTitle || "Отправить"}
      </Button>
    </form>
  );
};

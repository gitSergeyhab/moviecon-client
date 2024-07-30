"use client";

import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { PropsWithChildren } from "react";
import { Button } from "../button";
import { cn } from "@/lib/utils/styles";
import { AnyDict } from "@/type/dict";

interface FormProps<T extends AnyDict> extends PropsWithChildren {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  name?: string;
  className?: string;
  submitTitle?: string;
}

export const Form = <T extends AnyDict>({
  form,
  children,
  onSubmit,
  name,
  className,
  submitTitle,
}: FormProps<T>) => {
  const { formState, handleSubmit } = form;
  const { isSubmitting, isValid } = formState;
  console.log({ isValid });
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={cn("w-full", className)}
    >
      <h2 className="text-2xl mb-6 text-center text-primary font-bold">
        {name}
      </h2>
      {children}
      <Button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="w-full font-bold"
        variant={"outline"}
      >
        {submitTitle || "Отправить"}
      </Button>
    </form>
  );
};

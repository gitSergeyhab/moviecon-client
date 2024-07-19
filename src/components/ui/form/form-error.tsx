import { FC, PropsWithChildren } from "react";

export const FormError: FC<PropsWithChildren> = ({ children }) => (
  <div className="text-red-800 font-bold text-sm mt-1 min-h-5">{children}</div>
);

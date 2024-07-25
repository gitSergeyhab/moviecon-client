import { FC, PropsWithChildren } from "react";

export const MainHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="font-bold text-xl sm:text-3xl text-center my-1 sm:my-3">
      {children}
    </h1>
  );
};

export const SecondaryHeader: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="font-bold text-2xl text-center my-2">{children}</h2>;
};

import MainLayout from "@/layouts/main/MainLayout";
import PageNotFound from "@/modules/PageNotFound/PageNotFound";
import { FC } from "react";

export const ErrorElement: FC = () => (
  <MainLayout>
    <PageNotFound />
  </MainLayout>
);

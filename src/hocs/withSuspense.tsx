import { ContentLoader } from "@/components/ContentLoader";
import { ComponentType, Suspense } from "react";

export const withSuspense = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => (
    <Suspense fallback={<ContentLoader size="2xl" className="h-[720px]" />}>
      <Component {...props} />
    </Suspense>
  );
};

import { MAIN_TITLE } from "@/const/title";
import { useEffect } from "react";

export const useTitle = (title: string, isMainTitle = true) => {
  useEffect(() => {
    document.title = isMainTitle ? `${MAIN_TITLE} | ${title}` : title;
    return () => {
      document.title = MAIN_TITLE;
    };
  });
};

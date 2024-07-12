import { FC, useEffect, useState } from "react";
import { Button } from "./ui/button";

export const ToggleTheme: FC = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return <Button onClick={() => setIsDark((p) => !p)}>тема</Button>;
};

import { FC, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import ThemeService from "@/lib/utils/themeService";

export const ToggleTheme: FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDark = ThemeService.theme === "dark";
    setIsDark(isDark);
  }, []);

  useEffect(() => {
    if (isDark) {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleButtonClick = () => {
    const newTheme = isDark ? "light" : "dark";
    ThemeService.theme = newTheme;
    setIsDark((prev) => !prev);
  };
  return (
    <Button onClick={handleButtonClick}>{isDark ? <Sun /> : <Moon />}</Button>
  );
};

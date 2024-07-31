import { Theme } from "@/type/ui";

const THEME_KEY = "movie-con-theme";

class ThemeService {
  static get theme(): Theme | null {
    return window.localStorage.getItem(THEME_KEY) as Theme | null;
  }

  static set theme(theme: Theme) {
    window.localStorage.setItem(THEME_KEY, theme);
  }
}

export default ThemeService;

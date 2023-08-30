import { createContext } from "react";

interface ThemeSchemeType {
  changeTheme: (isLight: boolean) => void;
  loading: boolean;
}

export const ThemeSchemeContext = createContext<ThemeSchemeType>({
  changeTheme: () => {},
  loading: false,
});

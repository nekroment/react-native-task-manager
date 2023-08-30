import { useContext } from "react";

import { ThemeSchemeContext } from "./context";

export const useThemeScheme = () => useContext(ThemeSchemeContext);

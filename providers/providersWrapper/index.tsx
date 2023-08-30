import { FC, ReactNode } from "react";

import ThemeSchemeProvider from "../themeSchemeProvider/provider";

interface Props {
    themeIsLight: boolean;
    setThemeIsLight: (value: boolean) => void;
    children: ReactNode;
}

export const ProvidersWrapper: FC<Props> = ({ children, ...props }) => {
    return (
        <ThemeSchemeProvider {...props}>
            {children}
        </ThemeSchemeProvider>
    )
}
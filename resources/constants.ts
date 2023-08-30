import { Theme } from "@react-navigation/native";

import { NavigationNames, PageInfo } from "./types";
import { SignUpPage } from "../pages/SignUpPage";
import { LoginPage } from "../pages/LoginPage";
import { StartPage } from "../pages/StartPage";

export const pages: PageInfo[] = [
    {
        Component: StartPage,
        name: NavigationNames.START
    },
    {
        Component: LoginPage,
        name: NavigationNames.LOGIN,
    },
    {
        Component: SignUpPage,
        name: NavigationNames.SIGN_UP,
    }
];

export const defaultTheme: Theme = {
    dark: true,
    colors: {
        background: "#212832",
        card: "#455A64",
        text: "#FFFFFF",
        notification: "#FED36A",
        border: "#FFFFFF",
        primary: "#FED36A",
    },
};

export const lightTheme: Theme = {
    dark: false,
    colors: {
        background: "#f4f7df",
        card: "#455A64",
        text: "#000000",
        notification: "#FED36A",
        border: "#000000",
        primary: "#FED36A",
    },
};

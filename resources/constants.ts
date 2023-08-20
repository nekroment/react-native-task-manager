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

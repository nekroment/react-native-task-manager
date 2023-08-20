import { FunctionComponent } from "react";

export enum NavigationNames {
    START = "Start",
    LOGIN = "Login",
    SIGN_UP = "Sign Up",
}

export interface PageInfo {
    Component: FunctionComponent<any>;
    name: NavigationNames;
}

export type NavigationParamList = {
    [NavigationNames.START]: undefined;
    [NavigationNames.LOGIN]: undefined;
    [NavigationNames.SIGN_UP]: undefined;
}

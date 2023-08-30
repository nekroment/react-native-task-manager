import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance, ColorSchemeName, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import { ThemeSchemeContext } from "./context";

import style from "./style";

interface Props {
    themeIsLight: boolean;
    setThemeIsLight: (value: boolean) => void;
    children: ReactNode;
}

const themeToken = "color-scheme";

export const ThemeSchemeProvider: FunctionComponent<Props> = ({ children, themeIsLight, setThemeIsLight }) => {
  const [loading, setLoading] = useState(true);
  const scheme = useTheme();

  useEffect(() => {
    const getStorageInfo = async () => {
      const theme = await AsyncStorage.getItem(themeToken);
      Appearance.setColorScheme(theme as ColorSchemeName || "dark");
      setThemeIsLight(theme === "light");
      setLoading(false);
    }

    getStorageInfo();

    const subscribtion = Appearance.addChangeListener((preferences) => {
      const { colorScheme } = preferences;
      AsyncStorage.setItem(themeToken, colorScheme as string);
      setThemeIsLight(colorScheme === "light");
    });

    return () => subscribtion.remove();
  }, []);

  const changeTheme = (isLight: boolean) => {
    Appearance.setColorScheme(isLight ? "light" : "dark");
  }

  return (
    <ThemeSchemeContext.Provider
      value={{
        changeTheme,
        loading,
      }}>
      <View style={[style.wrapper, {
        backgroundColor: scheme.colors.background,
      }]}>
        {children}
      </View>
    </ThemeSchemeContext.Provider>
  );
};

export default ThemeSchemeProvider;

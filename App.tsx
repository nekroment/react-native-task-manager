import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { useMemo, useState } from 'react';

import { NavigationNames, NavigationParamList } from './resources/types';
import { defaultTheme, lightTheme, pages } from './resources/constants';
import { ProvidersWrapper } from './providers/providersWrapper';
import { Header } from './components/header';

const RootStack = createStackNavigator<NavigationParamList>();

export default function App() {
  const [themeIsLight, setThemeIsLight] = useState(false);
  const route = useRoute();

  const checkHeaderEnabled = useMemo(() => {
    if (route.name === NavigationNames.LOGIN || route.name === NavigationNames.SIGN_UP) {
      return false;
    }

    return true;
  }, [route]);

  return (
    <NavigationContainer theme={!themeIsLight ? defaultTheme : lightTheme}>
      <ProvidersWrapper themeIsLight={themeIsLight} setThemeIsLight={setThemeIsLight}>
        <RootStack.Navigator screenOptions={{
          headerShown: checkHeaderEnabled,
          headerTitle: (props) => <Header />
        }} initialRouteName={NavigationNames.START}>
          {
            pages.map((page) => (
              <RootStack.Screen key={page.name} name={page.name} component={page.Component} />
          ))
          }
        </RootStack.Navigator>
      </ProvidersWrapper>
    </NavigationContainer>
  );
}

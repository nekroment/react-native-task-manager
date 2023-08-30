import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import { NavigationNames, NavigationParamList } from './resources/types';
import { defaultTheme, lightTheme, pages } from './resources/constants';
import { ProvidersWrapper } from './providers/providersWrapper';

const RootStack = createStackNavigator<NavigationParamList>();

export default function App() {
  const [themeIsLight, setThemeIsLight] = useState(false);

  return (
    <NavigationContainer theme={!themeIsLight ? defaultTheme : lightTheme}>
      <ProvidersWrapper themeIsLight={themeIsLight} setThemeIsLight={setThemeIsLight}>
        <RootStack.Navigator initialRouteName={NavigationNames.START}>
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

import { createStackNavigator } from '@react-navigation/stack';

import { NavigationNames, NavigationParamList } from './resources/types';
import { pages } from './resources/constants';
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createStackNavigator<NavigationParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={NavigationNames.START}>
        {
          pages.map((page) => (
            <RootStack.Screen key={page.name} name={page.name} component={page.Component} />
         ))
        }
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

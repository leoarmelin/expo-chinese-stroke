import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/SearchScreen';
import TabTwoScreen from '../screens/IdeogramScreen';
import { RootStackParamList } from '../@types/routes';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Search' component={TabOneScreen} />
      <Stack.Screen name='Ideogram' component={TabTwoScreen} />
      <Stack.Screen name='NotFound' component={NotFoundScreen} />
    </Stack.Navigator>
  );
}

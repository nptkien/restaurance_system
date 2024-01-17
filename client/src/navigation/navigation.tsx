// navigation.ts
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouterNames from './router_names';
import HomeScreen from '../screens/home/view';
import SplashScreen from '../screens/splash/view';
import IntroScreen from '../screens/intro/view';




const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouterNames.SPLASH} screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={RouterNames.SPLASH}
          component={SplashScreen}
        />
        <Stack.Screen
          name={RouterNames.INTRO}
          component={IntroScreen}
        />
        <Stack.Screen
          name={RouterNames.HOME}
          component={HomeScreen}
        />
        {/* Thêm các màn hình khác ở đây nhé <3*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
// navigation.ts
import React, { useMemo } from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import RouterNames from './router_names';
import HomeScreen from '../screens/home/view';
import SplashScreen from '../screens/splash/view';
import IntroScreen from '../screens/intro/view';
import { useAppSelector } from '../redux/hook';
import { usersState } from '../redux/slices/users';
import { navigationRef } from './utilities';
import { HomeNavigator, HomeTabParamList } from './home_tab_navigation';
export type AppStackParamList = {
  Welcome: undefined
  Login: undefined
  HomeTab: NavigatorScreenParams<HomeTabParamList>
  Splash: undefined
  ProductList: { categoryId: string }
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

const Stack = createNativeStackNavigator();
export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> { }

const AppStack = () => {
  const { users: user } = useAppSelector(usersState);
  const getAppRouters = useMemo(() => {
    return <>
      <Stack.Screen name={"Home"} component={HomeNavigator} />

      <Stack.Screen
        name={RouterNames.SPLASH}
        component={SplashScreen}
      />
      <Stack.Screen
        name={RouterNames.INTRO}
        component={IntroScreen}
      />
      {/* <Stack.Screen
        name={RouterNames.HOME}
        component={HomeScreen}
      /> */}
    </>

  }, [user])
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, }}
      initialRouteName={RouterNames.SPLASH as keyof AppStackParamList} // @demo remove-current-line
    >
      <>
        {getAppRouters}
      </>

    </Stack.Navigator >
  )
}
const AppNavigator: React.FC = (props: any) => {
  return (
    <NavigationContainer ref={navigationRef} {...props} >
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
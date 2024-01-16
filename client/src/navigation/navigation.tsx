// navigation.ts
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouterNames from './router_names';
import HomeView from '../screens/home/view';




const Stack=createNativeStackNavigator();

const Navigation: React.FC=() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouterNames.COMPONENT}>
        <Stack.Screen name={RouterNames.COMPONENT} component={HomeView} />
        {/* Thêm các màn hình khác ở đây nhé <3*/}
      </Stack.Navigator>


    </NavigationContainer>
  );
};

export default Navigation;
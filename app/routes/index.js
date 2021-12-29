import React from 'react';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { useTheme, Colors } from 'react-native-paper';

import HomeScreen from 'view/pages/home';
import SettingsScreen from 'view/pages/settings';
const Tab = createBottomTabNavigator();
  
const Router = () => {
  const themes = useTheme();
  const navigationTheme = themes.dark ? DarkTheme : DefaultTheme;
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
      tabBarOptions= {tabBarOptions}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const tabBarOptions = {
  keyboardHidesTabBar: true,
  activeTintColor: Colors.secondary,
  inactiveTintColor: Colors.grey700,
  labelStyle: {
    fontSize: 16,
    marginBottom: 20,
  },
  style: {
    borderTopWidth: 0.5,
    borderTopColor:Colors.grey500,
    elevation: 0,
    width: '100%',
    height: 55,
  },
};

export default Router;

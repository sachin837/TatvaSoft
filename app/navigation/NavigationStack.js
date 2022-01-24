import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'app/screens/Home';
import DetailPage from 'app/screens/DetailPage';

const Stack = createNativeStackNavigator();


const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, }}>
        <Stack.Screen
          name={"Home"}
          component={Home}
        />
        <Stack.Screen
          name={"DetailPage"}
          component={DetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

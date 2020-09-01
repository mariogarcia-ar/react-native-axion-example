import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import axios from 'axios';

import { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';

import HomeScreen from './components/HomeScreen';
// import ProfileScreen from './components/ProfileScreen'; 
// import SettingsScreen from './components/SettingsScreen';

import UserScreen from './components/UserScreen'; 

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} /> 
      {/* <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      <Stack.Screen name="User" component={UserScreen} /> 
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

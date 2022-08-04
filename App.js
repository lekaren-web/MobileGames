import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
} from "react-native";
import { DataStore } from "@aws-amplify/datastore";
import { Genres } from "./src/models";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'
import MultiPlayer from './Multiplayer'
import Racing from './Racing'
import CastleDefense from './CastleDefense'
import FightingFps from './FightingFps'
import Horror from './Horror'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Multiplayer" component={MultiPlayer} options={{headerShown:false}} />
      <Stack.Screen name="Horror" component={Horror} options={{headerShown:false}} />
      <Stack.Screen name="Racing" component={Racing} options={{headerShown:false}} />
      <Stack.Screen name="Castle Defense" component={CastleDefense} options={{headerShown:false}} />
      <Stack.Screen name="Fighting FPS" component={FightingFps} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// import component
import Drawer from './NavigationBar/MainDrawer';
import Rootstack from './Screen/RootStack';


export default function App() {
  return (
    <NavigationContainer>
     {/* <Drawer/> */}
     <Rootstack/>
    </NavigationContainer>
  );
}
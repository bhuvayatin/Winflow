import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import component
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import {DrawerContent}  from './DrawerIteam';
import SignUpScreen from '../Screen/SignUpScreen';
import SignInScreen from '../Screen/SignInScreen';
import NotificationsScreen from '../Screen/NotificationsScreen';



const Drawer = createDrawerNavigator();

  
 
  
function MyDrawer() {
  return (
    
     
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} initialRouteName="SignInScreen">
      <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
      <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen}/>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="SignUpScreen" component={SignUpScreen} />
      <Drawer.Screen name="SignInScreen" component={SignInScreen} />
    
      </Drawer.Navigator> 
  
  );
}
export default MyDrawer;
import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import Main from '../Navigation/Main';
import CustomDrawer from './CustomDrawer';
import HomeStacktopview from '../Component/HomeStacktopview';
const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="main"
        component={Main}
        options={{
          headerShown: false,
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

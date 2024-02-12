import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Myorganization from '../Home/DrawerTab/Myorganization';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();





const DrawerNavigatorRoutes = props => {
  return 
  return (
    <View>
      <Text>Drawer</Text>
    </View>
    // <Drawer.Navigator
    // initialRouteName="Myorganization"
    //   screenOptions={{
    //     headerShown: false,
    //   }}>
    //   <Drawer.Screen
    //     name="Myorganization"
    //     component={Myorganization}
    //   />
      
    // </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
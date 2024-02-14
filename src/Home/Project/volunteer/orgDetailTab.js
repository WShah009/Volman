import * as React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import color from '../../../Assets/colors/colors';
import OrgInfoScreen from './orgInfoScreen';
import OrgCempaignScreen from './orgCempaignScreen';
const Tab = createMaterialTopTabNavigator();

export default function OrgDetailTabs() {
  return (
    <Tab.Navigator
      style={{minHeight: 1000}}
      screenOptions={{
        tabBarActiveTintColor: color.btnColor,
        tabBarinactiveTintColor: color.default,
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarStyle: {
          fontWeight: 'bold',
          backgroundColor: color.bodyColor,
          paddingBottom: 3,
          fontSize: 18,
          elevation: 0,
          fontWeight: 'bold',
          marginTop: 15,
        },
        tabBarIndicatorStyle: {
          height: 2.5,
          backgroundColor: color.btnColor,
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen name="Home" component={OrgCempaignScreen} />
      <Tab.Screen name="Settings" component={OrgInfoScreen} />
    </Tab.Navigator>
  );
}

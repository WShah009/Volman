import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import color from '../../../Assets/colors/colors';

import OrgPast from './OrgPast';
import OrgUpcoming from './OrgUpcoming';
import Inprogress from './Inprogress';
import OrgCancel from './OegCanceled';
const Tab = createMaterialTopTabNavigator();
const MainOrgTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="OrgUpcoming"
      screenOptions={{
        tabBarActiveTintColor: color.btnColor,

        tabBarinactiveTintColor: color.btnColor,

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

      <Tab.Screen
        name="Inprogress"
        component={Inprogress}
        options={{
          title: 'Inprogress',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
          // headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="OrgUpcoming"
        component={OrgUpcoming}
        options={{
          title: 'Planned',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
          // headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="OrgPast"
        component={OrgPast}
        options={{
          
          tabBarLabel: 'Completed',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
          
        }} />

<Tab.Screen
        name="OrgCancel"
        component={OrgCancel}
        options={{
          
          tabBarLabel: 'Cancelled',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
          
        }} />


    </Tab.Navigator>
  );
};

export default MainOrgTab;

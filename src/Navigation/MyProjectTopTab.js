import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Upcoming from '../MyProjectTabs/Upcoming';
import Past from '../MyProjectTabs/Past';
import color from '../Assets/colors/colors';
const Tab = createMaterialTopTabNavigator();
const MyProjectTopTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Upcoming"
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
        name="Upcoming"
        component={Upcoming}
        options={{
          title: 'Upcoming',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
          // headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Past"
        component={Past}
        options={{
          tabBarLabel: 'Past',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MyProjectTopTab;

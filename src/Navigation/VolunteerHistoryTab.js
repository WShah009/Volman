import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PastVolunteer from '../Home/Project/volunteer/PastVolunteer';
import UpcomingVolunteer from '../Home/Project/volunteer/UpcomingVolunteer';
import PendingVolunteer from '../Home/Project/volunteer/PendingVolunteer';
import color from '../Assets/colors/colors';

const Tab = createMaterialTopTabNavigator();

export default function VolunteerHistoryNav() {
  return (
    <Tab.Navigator
      style={{minHeight: 1000}}
      screenOptions={{
        upperCaseLabel: false,
        tabBarActiveTintColor: color.btnColor,
        tabBarinactiveTintColor: color.default,
        //  activeBackgroundColor: color.bodyColor,
        tabBarStyle: {
          backgroundColor: color.bodyColor,
          elevation: 0,
          alignSelft: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 15,
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          height: 3,
          backgroundColor: color.btnColor,
        },
      }}>
      <Tab.Screen
        name="PastVolunteer"
        component={PastVolunteer}
        options={{
          header: () => null,
          title: 'Past',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 30,
            textTransform: 'capitalize',
          },
          headerTintColor: color.Green,
        }}
      />

      <Tab.Screen
        name="UpcomingVolunteer"
        component={UpcomingVolunteer}
        options={{
          header: () => null,
          title: 'Upcoming',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 30,
          },
          headerTintColor: color.Green,
        }}
      />
      <Tab.Screen
        name="PendingVolunteer"
        component={PendingVolunteer}
        options={{
          header: () => null,
          title: 'Pending',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 30,
          },
          headerTintColor: color.Green,
        }}
      />
    </Tab.Navigator>
  );
}

import * as React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyInterest from '../Home/Project/MyInterest';
import MyResume from '../Home/Project/MyResume';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';

const Tab = createMaterialTopTabNavigator();

export default function ProfileNavigator() {
  return (
    <Tab.Navigator
      style={{minHeight: 1000}}
      initialLayout={{width: Dimensions.get('window').width}}
      screenOptions={{
        tabBarActiveTintColor: color.btnColor,

        tabBarinactiveTintColor: color.btnColor,

        tabBarLabelStyle: {
          fontSize: 15,
          textTransform: 'capitalize',
          fontWeight: 'bold',
          // color: color.btnColor,
        },
        tabBarStyle: {
          fontWeight: 'bold',
          backgroundColor: color.bodyColor,
          paddingBottom: 3,
          fontSize: 18,
          elevation: 0,
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          height: 3,
          backgroundColor: color.btnColor,
          justifyContent: 'center',
        },
        style: {backgroundColor: color.bodyColor, elevation: 0},
      }}>
      <Tab.Screen
        name="MyResume"
        component={MyResume}
        options={{
          header: () => null,
          title: 'My Resume',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 30,
          },
          headerTintColor: color.Green,
        }}
      />

      <Tab.Screen
        name="MyInterest"
        component={MyInterest}
        options={{
          header: () => null,
          title: 'My Interest',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 30,
          },
          headerTintColor: color.Green,
        }}
      />
    </Tab.Navigator>
    // <Tab.Navigator
    //   style={{minHeight: 1000}}
    //   initialLayout={{width: Dimensions.get('window').width}}
    //   tabBarOptions={{
    //     activeTintColor: color.btnColor,
    //     inactiveTintColor: color.default,
    //     activeBackgroundColor: color.bodyColor,
    //     style: {
    //       backgroundColor: color.bodyColor,
    //       elevation: 0,
    //     },
    //     labelStyle: {
    //       fontSize: 15,
    //       textTransform: 'capitalize',
    //       fontWeight: 'bold',
    //     },
    //     indicatorStyle: {
    //       height: 3,
    //       backgroundColor: color.btnColor,
    //       justifyContent: 'center',
    //     },
    //   }}>
    //   <Tab.Screen
    //     name="MyResume"
    //     component={MyResume}
    //     options={{
    //       header: () => null,
    //       title: 'My Resume',
    //       headerTitleStyle: {
    //         color: color.btnColor,
    //         fontSize: 30,
    //       },
    //       headerTintColor: color.Green,
    //     }}
    //   />

    //   <Tab.Screen
    //     name="MyInterest"
    //     component={MyInterest}
    //     options={{
    //       header: () => null,
    //       title: 'My interest',
    //       headerTitleStyle: {
    //         color: color.btnColor,
    //         fontSize: 30,
    //       },
    //       headerTintColor: color.Green,
    //     }}
    //   />
    // </Tab.Navigator>
  );
}

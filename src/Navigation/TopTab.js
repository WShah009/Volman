import * as React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import JoinedOrganizations from '../Home/Organization/JoinedOrganizations';
import AllOrganizations from '../Home/Organization/AllOrganizations';
import color from '../Assets/colors/colors';

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    // <Tab.Navigator
    //   style={{minHeight: 1000}}
    //   tabBarOptions={{
    //     activeTintColor: color.btnColor,
    //     inactiveTintColor: color.btnColor,
    //     style: {
    //       fontWeight: 'bold',
    //       backgroundColor: color.bodyColor,
    //       paddingBottom: 3,
    //       fontSize: 18,
    //       elevation: 0,
    //       fontWeight: 'bold',
    //       marginTop: 15,
    //     },
    //     labelStyle: {
    //       fontSize: 14,
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
    //     name="All Organizations"
    //     component={AllOrganizations}
    //     options={{
    //       title: 'All Organizations',
    //       headerTitleStyle: {
    //         color: color.btnColor,
    //         fontSize: 13,
    //       },
    //       headerTintColor: '#fff',
    //     }}
    //   />
    //   <Tab.Screen name="Joined Organizations" component={JoinedOrganizations} />
    // </Tab.Navigator>

    <Tab.Navigator
      style={{minHeight: 1000}}
      screenOptions={{
        tabBarActiveTintColor: color.btnColor,

        tabBarinactiveTintColor: color.default,

        tabBarLabelStyle: {
          fontSize: 14,
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
          marginTop: 15,
        },
        tabBarIndicatorStyle: {
          height: 2.5,
          backgroundColor: color.btnColor,
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="All Organizations"
        component={AllOrganizations}
        options={{
          header: () => null,
          title: 'All Organizations',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 30,
          },
          headerTintColor: color.Green,
        }}
      />

      <Tab.Screen name="Joined Organizations" component={JoinedOrganizations} />
    </Tab.Navigator>
  );
}

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import ALLOrganizations from '../Home/Organization/ALLOrganizations';
// import JoinedOrganizations from '../Home/Organization/JoinedOrganizations';
// const Tab = createMaterialTopTabNavigator();

// function TopTab() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="ALLOrganizations" component={ALLOrganizations} />
//       <Tab.Screen name="JoinedOrganizations" component={JoinedOrganizations} />
//     </Tab.Navigator>
//   );
// }
// export default TopTab

// import {View, Text} from 'react-native';
// import React from 'react';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import color from '../../../Assets/colors/colors';

// import VolInprogress from './Volinprogress';
// import Volupcoming from './Volupcoming';
// import VolPast from './Volcomplete';
// import VolCancel from './volcancel';
// const Tab = createMaterialTopTabNavigator();
// const MainVolTab = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Volupcoming"
//       screenOptions={{
//         tabBarActiveTintColor: color.btnColor,

//         tabBarinactiveTintColor: color.btnColor,

//         tabBarLabelStyle: {
//           fontSize: 12,
//           textTransform: 'capitalize',
//           fontWeight: 'bold',
//         },
//         tabBarStyle: {
//           fontWeight: 'bold',
//           backgroundColor: color.bodyColor,
//           paddingBottom: 3,
//           elevation: 0,
//           marginTop: 15,
//         },
//         tabBarIndicatorStyle: {
//           height: 2.5,
//           backgroundColor: color.btnColor,
//           justifyContent: 'center',
//         },
//       }}>
//       <Tab.Screen
//         name="VolInprogress"
//         component={VolInprogress}
//         options={{
//           title: 'Inprogress',
//           headerTitleStyle: {
//             color: color.btnColor,
//             fontSize: 13,
//           },
//           // headerTintColor: '#fff',
//         }}
//       />
//       <Tab.Screen
//         name="Volupcoming"
//         component={Volupcoming}
//         options={{
//           title: 'Planned',
//           headerTitleStyle: {
//             color: color.btnColor,
//             fontSize: 13,
//           },
//           // headerTintColor: '#fff',
//         }}
//       />
//       <Tab.Screen
//         name="VolPast"
//         component={VolPast}
//         options={{
//           tabBarLabel: 'Completed',
//           headerTitleStyle: {
//             color: color.btnColor,
//             fontSize: 13,
//           },
//         }}
//       />

//       <Tab.Screen
//         name="VolCancel"
//         component={VolCancel}
//         options={{
//           tabBarLabel: 'Cancelled',
//           headerTitleStyle: {
//             color: color.btnColor,
//             fontSize: 13,
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MainVolTab;

import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import color from '../../../Assets/colors/colors';

import VolInprogress from './Volinprogress';
import Volupcoming from './Volupcoming';
import VolPast from './Volcomplete';
import VolCancel from './volcancel';

const Tab = createMaterialTopTabNavigator();

const MainVolTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Volupcoming"
      tabBarOptions={{
        activeTintColor: color.btnColor,
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 14,
          textTransform: 'capitalize',
          fontWeight: 'bold',
          maxWidth: 80, // Set a maximum width for the labels
          overflow: 'hidden',
          textAlign: 'center', // Center-align the text
          marginRight: 0, // Add some space between the labels
          textAlign: 'center', // Center-align the text
        },
        tabStyle: {
          width: 'auto', // Allow the tab to adjust its width based on content
        },
        style: {
          backgroundColor: color.bodyColor,
          paddingVertical: 3,

          marginTop: 15,
        },
        indicatorStyle: {
          height: 2.5,
          backgroundColor: color.btnColor,
        },
      }}>
      <Tab.Screen
        name="VolInprogress"
        component={VolInprogress}
        options={{
          tabBarLabel: 'Inprogress',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
        }}
      />
      <Tab.Screen
        name="Volupcoming"
        component={Volupcoming}
        options={{
          tabBarLabel: 'Planned',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
        }}
      />
      <Tab.Screen
        name="VolPast"
        component={VolPast}
        options={{
          tabBarLabel: 'Completed',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
        }}
      />
      <Tab.Screen
        name="VolCancel"
        component={VolCancel}
        options={{
          tabBarLabel: 'Cancelled',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainVolTab;

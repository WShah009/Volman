
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Active from '../Home/SeeOrganization/ActiveCaminfo/Active';
import Campaigns from '../Home/SeeOrganization/ActiveCaminfo/Campaigns';
import Info from '../Home/SeeOrganization/ActiveCaminfo/Info';
import color from '../Assets/colors/colors';

const Tab = createMaterialTopTabNavigator();

export default function OrgnInfo() {
  return (
   
      <Tab.Navigator style={{minHeight:1000}}
              tabBarOptions={{
                activeTintColor: color.btnColor,
                inactiveTintColor: color.default,
                activeBackgroundColor: color.bodyColor,
                    style: {
                      backgroundColor: color.bodyColor,
                      paddingVertical: 5,
                      elevation: 0,
                    },
                    labelStyle: {
                      fontSize: 14,
                      textTransform: 'capitalize',
                      fontWeight: 'bold',
                  },
            }}
          
            >
        <Tab.Screen name="Active" component={Active} />
        <Tab.Screen name="Campaigns" component={Campaigns} />
        <Tab.Screen name="Info" component={Info} />
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
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyResume from '../Home/BottomTab/Profile';
import NearMe from '../Home/BottomTab/NearMe';
import HomeBottomTab from '../Home/BottomTab/HomeBottomTab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../Assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import VolunteerHome from '../Home/BottomTab/Home';
import Voleventstab from '../Home/BottomTab/volevents';
const Tab = createBottomTabNavigator();
export default function TabNavigate() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveBackgroundColor: color.tabClr,
        tabBarActiveTintColor: color.gray,
        tabBarInactiveTintColor: color.gray,
        tabBarInactiveBackgroundColor: color.tabClr,
        tabBarStyle: {backgroundColor: color.red},
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarStyle: {backgroundColor: color.red},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconName2;

          if (route.name === 'VolunteerHome') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'HomeBottomTab') {
            iconName = focused ? 'account-group' : 'account-group';
          } else if (route.name === 'Voleventstab') {
            iconName = focused ? 'calendar-today' : 'calendar-today';
          } else if (route.name === 'NearMe') {
            iconName = focused ? 'send' : 'send';
          }

          // You can r eturn any component that you like here!
          return (
            <Icon
              name={iconName}
              size={30}
              color={color}
              style={{marginBottom: 5}}
            />
          );
        },
        // tabBarBackground:() =>(
        //   <View style={{ backgroundColor: 'red', height: 100, width: 100, zIndex: 1}}>
        //     <LinearGradient  colors={[color.linTopClr, color.linMidClr, color.linBotClr]} style={styles.linearGradientStyle}/>
        //   </View>
        // ),
        tabBarActiveTintColor: color.white,
        tabBarInactiveTintColor: color.white,
      })}>
      <Tab.Screen
        name="VolunteerHome"
        component={VolunteerHome}
        options={{
          header: () => null,
          title: 'Home',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
          headerTintColor: '#fff',
        }}
      />

      <Tab.Screen
        name="HomeBottomTab"
        component={HomeBottomTab}
        options={{
          header: () => null,
          title: 'Organizations',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Voleventstab"
        component={Voleventstab}
        options={{
          header: () => null,
          title: 'Events',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="NearMe"
        component={NearMe}
        options={{
          header: () => null,
          title: 'Near Me',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
          headerTintColor: '#fff',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  linearGradientStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(65),
    paddingHorizontal: 12,
  },
});

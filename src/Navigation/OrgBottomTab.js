import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer,} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyResume from '../Home/BottomTab/Profile';
import NearMe from '../Home/BottomTab/NearMe';
import HomeBottomTab from '../Home/BottomTab/HomeBottomTab';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../Assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import Dashboard from '../OrganizationDashboard/Dashboard';
import VolunteerManagment from '../Home/DrawerTab/DrawerNavigation/VolunteerManagment';
import MyProjects from '../Home/DrawerTab/MyProjects';
import Inbox from '../OrganizationDashboard/Inbox';


const Tab = createBottomTabNavigator();
export default function OrgBottomTabNavigate() {

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveBackgroundColor: color.tabClr,
      tabBarActiveTintColor: color.gray,
      tabBarInactiveTintColor: color.gray,
      tabBarInactiveBackgroundColor: color.tabClr,
      tabBarStyle: {
        backgroundColor: color.red,
        height: 60, 
       
      },
      tabBarLabelStyle: {
        fontSize: 12,
        textTransform: 'capitalize',
        fontWeight: 'bold',
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
  
        if (route.name === 'Dashboard') {
          iconName = focused ? 'home-filled' : 'home';
        } else if (route.name === 'VolunteerManagment') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'MyProjects') {
          iconName = focused ? 'calendar-today' : 'calendar-today';
        } else if (route.name === 'Inbox') {
          iconName = focused ? 'message' : 'message';
        }
  
        // You can return any component that you like here!
        return (
          <Icon
            name={iconName}
            size={30}
            color={color}
            style={{ marginBottom: -5 }}
          />
        );
      },
      tabBarActiveTintColor: color.white,
      tabBarInactiveTintColor: color.white,
    })}
  >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
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
        name="VolunteerManagment"
        component={VolunteerManagment}
        options={{
          header: () => null,
          title: 'Volunteer',
          headerTitleStyle: {
            color: color.btnColor,
            fontSize: 13,
          },
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="MyProjects"
        component={MyProjects}
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
        name="Inbox"
        component={Inbox}
        options={{
          header: () => null,
          title: 'Inbox',
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
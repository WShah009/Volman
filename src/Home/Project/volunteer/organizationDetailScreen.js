import {View, Text, Image} from 'react-native';
import React from 'react';
import OrgDetailTabs from './orgDetailTab';
const Tab = createMaterialTopTabNavigator();
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import color from '../../../Assets/colors/colors';
import OrgCempaignScreen from './orgCempaignScreen';
import OrgInfoScreen from './orgInfoScreen';
import Header from '../../../Component/Header';
import HeaderWithLogo from '../../../Component/Headerwithlogo';
import OrgActiveScreen from './orgActiveScreen';
const OrganizationDetailScreen = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderWithLogo Text="Hope Farm" />

      <View
        style={{
          width: '100%',
          height: '25%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../Assets/farm.jpg')}
          style={{
            height: '75%',
            width: '50%',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        />
      </View>
      <Tab.Navigator
        style={{flex: 1}}
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
        <Tab.Screen name="Active" component={OrgActiveScreen} />
        <Tab.Screen name="Campeings" component={OrgCempaignScreen} />
        <Tab.Screen name="Info" component={OrgInfoScreen} />
      </Tab.Navigator>
    </View>
  );
};
export default OrganizationDetailScreen;

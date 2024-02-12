import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabNavigate from '../Navigation/Tabnavigate';
import HomeStacktopview from '../Component/HomeStacktopview';

const Home = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <TabNavigate />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});

// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function Home() {
//   return (

//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>

//   );
// }

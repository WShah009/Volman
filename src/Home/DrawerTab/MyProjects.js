import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyProjectTopTab from '../../Navigation/MyProjectTopTab';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../Component/Header';
import MainOrgTab from '../Project/Organization.js/MainOrgTab';
import EventHeaderwithsearch from '../../Component/EventHeaderWithSearch';
import {useNavigation} from '@react-navigation/native';
const MyProjects = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* <Header Text="Events" /> */}
      <EventHeaderwithsearch
        onPress={() => {
          navigation.openDrawer();
        }}
        onPressnotification={() => {
          navigation.navigate('notification');
        }}
      />
      
      {global.usertype === '0' ? <MyProjectTopTab /> : <MainOrgTab />}
    </>
  );
};

export default MyProjects;

const styles = StyleSheet.create({});

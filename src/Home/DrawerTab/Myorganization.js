import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import color from '../../Assets/colors/colors';
import {ScrollView} from 'native-base';
import CardOrganization from '../../Component/CardOrganization';
import Header from '../../Component/Header';
const Myorganization = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header Text="My Organization" />
      <View style={styles.cardCont}>
        <CardOrganization />
      </View>
    </>
  );
};

export default Myorganization;

const styles = StyleSheet.create({
  cardCont: {
    backgroundColor: color.bodyColor,
  },
  container: {
    paddingHorizontal: 8,
  },
});

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DashboardCard = props => {
  return (
    <View style={styles.MainContainer}>
      <MaterialCommunityIcons name={props.icon} size={60} color={color.btnColor} />
      <Text style={styles.count}>{props.count}</Text>
      <Text style={styles.Text}>{props.Heading}</Text>
    </View>
  );
};

export default DashboardCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bodyColor,
    paddingHorizontal: 15,
  },
  count: {
    fontSize: 20,
    color: color.btnColor,
    fontWeight: '500',
  },
  Text: {
    fontSize: 17,
    color: '#2c5f70',
    fontWeight: 'bold',
  },
  MainContainer: {
    width: '85%',
    backgroundColor: color.white,
    alignSelf: 'center',
    height: normalize(120),
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
});

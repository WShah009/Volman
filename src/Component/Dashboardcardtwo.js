import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DashboardCardtwo = props => {
  return (
    <View style={styles.MainContainer}>
      <MaterialCommunityIcons name={props.icon} size={40} color={color.btnColor} />
      <Text style={styles.count}>{props.count}</Text>
      <Text style={styles.Text}>{props.Heading}</Text>
    </View>
  );
};

export default DashboardCardtwo;
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bodyColor,
    paddingHorizontal: 15,
  },
  count: {
    fontSize: 30,
    color: color.btnColor,
    fontWeight: 'bold',
  },
  Text: {
    fontSize: 17,
    color: '#2c5f70',
    fontWeight: 'bold',
  },
  MainContainer: {
    width: '45%',
    backgroundColor: '#dddde4',
    alignSelf: 'center',
    height: normalize(120),
    marginTop: 15,
   
 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    
  },
});

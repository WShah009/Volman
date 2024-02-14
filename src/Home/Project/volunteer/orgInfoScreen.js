import {View, Text} from 'react-native';
import React from 'react';
import color from '../../../Assets/colors/colors';
const OrgInfoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#FFF',
          borderRadius: 15,
          height: '79%',
          width: '80%',
          marginBottom: 70,
          elevation: 6,
        }}>
        <Text
          style={{
            color: color.darkBlue,
            fontSize: 16,
            padding: 15,
            fontWeight: 'bold',
          }}>
          About Hope Farm
        </Text>
        <Text style={{color: 'black', padding: 10, fontSize: 16}}>
          {' '}
          HOPE farm is a long-tem Leadership Decelopment program that guides at-
          risk boys, without the benift of a male role modle that is positive in
          their homes, from the time they are almost 5-7 years old until high
          school, and beyond. Since 1989, you have helped us serve hundrends of
          at-risk boys and moms in Forth Worth, breaking the cycle of fatherless
          families... There is Still Work to be done!
        </Text>
      </View>
    </View>
  );
};

export default OrgInfoScreen;

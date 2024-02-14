import {View, Text} from 'react-native';
import React from 'react';
import color from '../../../Assets/colors/colors';
const OrgCempaignScreen = () => {
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
          height: '29%',
          width: '80%',
          marginBottom: 240,
          elevation: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'grey', fontSize: 17}}>
          There are currently no campaigns.
        </Text>
        <Text style={{color: color.darkBlue, fontSize: 15}}>
          Please check back later
        </Text>
      </View>
    </View>
  );
};

export default OrgCempaignScreen;

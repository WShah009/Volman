import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import color from '../Assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';

const HomeStackwithoutsearch = (props, {navigation}) => {
  console.log(props);
  return (
    <>
      <LinearGradient
        colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
        style={styles.linearGradientStyle}>
        <TouchableOpacity onPress={props.onPress}>
          <Icon name="menu" size={30} color={color.white} />
        </TouchableOpacity>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Home
        </Text>

        <View style={styles.rightCont}>
          <TouchableOpacity onPress={props.onPressnotification}>
            <Icon
              name="notifications"
              style={styles.notIcon}
              size={25}
              color={color.white}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};

export default HomeStackwithoutsearch;

const styles = StyleSheet.create({
  linearGradientStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(65),
    elevation: 0,
    paddingHorizontal: 12,
    zIndex: -60,
  },

  rightCont: {
    flexDirection: 'row',
  },
  notIcon: {
    marginLeft: 5,
  },
});

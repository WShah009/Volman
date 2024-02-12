import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import color from '../Assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';

const HomeStacktopview = (props, {navigation}) => {
  return (
    <>
      <LinearGradient
        colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
        style={styles.linearGradientStyle}>
        <TouchableOpacity onPress={props.onPress}>
          <Icon name="sort-variant" size={30} color={color.white} />
        </TouchableOpacity>

        <View style={styles.rightCont}>
          {/* <TouchableOpacity onPress={props.onPressSearch}>
            <Icon name="search" size={25} color={color.white} />
          </TouchableOpacity>sort-variant
 */}
          <TouchableOpacity onPress={props.onPressnotification}>
            <Icon2
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

export default HomeStacktopview;

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

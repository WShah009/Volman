import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';
import DrawerNavigator from '../Drawer/DrawerNavigator';
import HomeStacktopview from '../Component/HomeStacktopview';
import {useNavigation} from '@react-navigation/native';
import color from '../Assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions} from '@react-navigation/native';

const Parent = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white', zIndex: 2}}>
      <DrawerNavigator />
    </View>
  );
};

export default Parent;

const styles = StyleSheet.create({
  linearGradientStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(65),
    paddingHorizontal: 12,
    zIndex: 1,
  },

  rightCont: {
    flexDirection: 'row',
  },
  notIcon: {
    marginLeft: 5,
  },
});

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../Assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';

const InboxHeaderwithsearch = (props, {navigation}) => {
  console.log(props);
  return (
    <View>
      <LinearGradient
        colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
        style={styles.linearGradientStyle}>
        <TouchableOpacity onPress={props.onPress}>
          <Icon name="menu" size={30} color={color.white} />
        </TouchableOpacity>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Inbox
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
      <View style={{justifyContent: 'center', marginLeft: '8%'}}>
        <View style={styles.searchContainer}>
          {/* <Icons.FontAwesome name="search" size={18} color={color.lightGray} /> */}
        
          <TextInput
            style={{
              flex: 1,
              paddingLeft: 10,
              color: 'black',
            }}
            placeholder="Search Name,Subject Date"
            placeholderTextColor={color.lightGray}
            // value={text}
            // onChangeText={val => {
            //   setText(val);
            // }}
          />

          <TouchableOpacity>
            <MaterialCommunityIcons
              name="magnify"
              style={styles.notIcon}
              size={25}
              color={color.black}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity
        
            >
            <LinearGradient
              colors={['#2E6875', '#1C1C4C']}
              style={styles.linearGradientStyle2}>
            
              <FontAwesome5
              name="sliders-h"
              style={styles.notIcon}
              size={25}
              color={color.white}
            />
            </LinearGradient>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default InboxHeaderwithsearch;

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
  linearGradientStyle2: {
    alignItems: 'center',
    elevation: 0,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    height: 50,
    width: '91%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
  },

  rightCont: {
    flexDirection: 'row',
  },
  notIcon: {
    marginLeft: 1,
  },
});

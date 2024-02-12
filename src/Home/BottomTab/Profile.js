import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import React from 'react';
import BoxHor from '../../Component/BoxHor';
import TopTab from '../../Navigation/TopTab';
import OrgnInfo from '../../Navigation/OrgnInfo';
import TabNavigate from '../../Navigation/Tabnavigate';
import ProfileNavigator from '../../Navigation/ProfileNavigator';
import color from '../../Assets/colors/colors';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import HomeStackwithoutsearch from '../../Component/HomeStackwithoutsearch';
import MyInterest from '../Project/MyInterest';
import {useSelector, useDispatch} from 'react-redux';
const MyResume = props => {
  const navigation = useNavigation();
  const {image} = useSelector(state => state.OrganizationReducer);
  return (
    <>
      <HomeStackwithoutsearch
        onPress={() => {
          navigation.openDrawer();
        }}
        onPressnotification={() => {
          props.navigation.navigate('notification');
        }}
      />
      <ScrollView style={styles.container}>
        {image === undefined || image === null || image === '' ? (
          <Image
            source={require('../../Assets/profile_image.png')}
            style={styles.imgStyle}
          />
        ) : (
          <Image
            source={{uri: global.imagePath + image}}
            style={styles.imgStyle}
          />
        )}
        {/* <Image
          style={styles.imgStyle}
          source={{
            uri: 'https://media.licdn.com/dms/image/C4E03AQFHUVfUb-EPuw/profile-displayphoto-shrink_800_800/0/1579127050288?e=2147483647&v=beta&t=mkmiCXlfFP86IeiXJ0dRNrZbYg2aLbpXjUK7uVxdeec',
          }}
        /> */}
        {/* <Icon name="photo-camera" size={22} style={styles.iconStyle} /> */}
        <Text style={styles.userName}>
          {global.Firstname} {global.LastName}
        </Text>
        <Text style={styles.email}>{global.email}</Text>
        {/*  <ProfileNavigator />*/}
        {/* <MyInterest /> */}
        <View style={{marginTop: 20}}>
          <View style={styles.detail}>
            <Entypo name="home" size={22} color={color.white} />
            <Text
              style={{
                color: color.white,
                paddingHorizontal: 20,
              }}>
              {global.city}
              {','} {global.district_name} {','}
              {global.street_name}{' '}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <View style={styles.detail}>
            <Entypo name="phone" size={22} color={color.white} />
            <Text
              style={{
                color: color.white,
                paddingHorizontal: 20,
              }}>
              {'+'}
              {global.countryId}
              {global.phone}
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MyResume;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bodyColor,
    paddingHorizontal: 15,
  },
  imgStyle: {
    height: normalize(120),
    borderRadius: 80,
    width: normalize(120),
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: color.white,
    marginTop: 20,
    zIndex: 11,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: color.btnColor,
  },
  detail: {
    backgroundColor: color.btnColor,
    width: '100%',
    height: normalize(60),
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 2,
  },
  email: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',

    color: color.btnColor,
  },
  iconStyle: {
    alignSelf: 'center',
    position: 'absolute',
    left: '61%',
    top: '6%',
    zIndex: 100,
    backgroundColor: color.white,
    borderRadius: 25,
    padding: 5,
    color: color.btnColor,
  },
});

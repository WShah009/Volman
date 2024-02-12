import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import HomeStacktopview from '../../Component/HomeStacktopview';
import {useNavigation} from '@react-navigation/native';
import TopTab from '../../Navigation/TopTab';
import MapView, {
  enableLatestRenderer,
  PROVIDER_GOOGLE,
  Marker,
} from 'react-native-maps';
import Header from '../../Component/Header';
const {width, height} = Dimensions.get('window');
const Map = ({route}) => {
  enableLatestRenderer();
  const navigation = useNavigation();
  const {long, lat} = route.params;
  console.log(long, lat);
  //   long = 12;
  //   lat = 27;

  return (
    <View style={{width: width, height: height}}>
      {/* <HomeStacktopview
        onPress={() => {
          navigation.openDrawer();
        }}
        onPressnotification={() => {
          props.navigation.navigate('notification');
        }}
      /> */}
      <Header Text="Direction" />
      {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>near me</Text>
        </View> */}
      {long === null || lat === null ? (
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </MapView>
      ) : (
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: parseFloat(lat),
            longitude: parseFloat(long),
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: parseFloat(lat),
              longitude: parseFloat(long),
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </MapView>
      )}

      {/* <ImageBackground
          source={require('./../../Assets/Googlemap.webp')}
          resizeMode="cover"
          style={styles.image}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>near me</Text>
          </View>
        </ImageBackground> */}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  map: {
    //  ...StyleSheet.absoluteFillObject,
    height: height,

    width: width,
  },
});

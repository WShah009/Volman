import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import BoxHor from '../../Component/BoxHor';
import TopTab from '../../Navigation/TopTab';
import OrgnInfo from '../../Navigation/OrgnInfo';
import TabNavigate from '../../Navigation/Tabnavigate';
import normalize from 'react-native-normalize';
import color from '../../Assets/colors/colors';
const {width} = Dimensions.get('screen');
import Header from '../../Component/Header';
const MainSeeorg = ({navigation, route}) => {
  const {image, title} = route.params;
  return (
    <ScrollView>
      <Header Text={title} />
      <View style={styles.container}>
        <Image
          style={styles.imgStyle}
          resizeMode="contain"
          source={{
            uri: global.imagePath + image,
          }}
        />

        <OrgnInfo />
      </View>
    </ScrollView>
  );
};

export default MainSeeorg;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bodyColor,
    paddingHorizontal: 15,

    width: width,
  },
  imgStyle: {
    height: normalize(100),
    marginVertical: 20,
  },
});

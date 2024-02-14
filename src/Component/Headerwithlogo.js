import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import color from '../Assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
const HeaderWithLogo = props => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <LinearGradient
        colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
        style={styles.linearGradientStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrowleft" size={30} color={color.white} />
        </TouchableOpacity>

        <Text
          style={{
            color: 'white',
            width: '80%',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {props.Text}
        </Text>
        <TouchableOpacity>
          <Image
            source={require('../Assets/joinorg.png')}
            style={{tintColor: 'white'}}
          />
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

export default HeaderWithLogo;

const styles = StyleSheet.create({
  linearGradientStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: normalize(65),
    elevation: 0,
    paddingHorizontal: 12,
    textAlign: 'center',
    zIndex: -60,
  },
});

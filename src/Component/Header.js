import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import color from '../Assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import {DrawerActions} from '@react-navigation/native';
import {width} from 'react-native-dimension';
import Modal from 'react-native-modal';
import {background} from 'native-base/lib/typescript/theme/styled-system';

const Header = props => {
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
{/* 
        <TouchableOpacity onPress={() => {}}>
          <Icon
            name="delete"
            size={25}
            color={color.white}
            onPress={toggleModal}
          />
        </TouchableOpacity> */}

      
      </LinearGradient>
    </>
  );
};

export default Header;

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
  lineargradientmodal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: normalize(45),
    elevation: 0,
    paddingHorizontal: 12,
    textAlign: 'center',
    zIndex: -60,
  },

  rightCont: {
    flexDirection: 'row',
  },
  notIcon: {
    marginLeft: 5,
  },
  loginBtn: {
    paddingHorizontal: 20,
    backgroundColor: color.purple,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '50%',
  },
  loginBtndelete: {
    paddingHorizontal: 20,
    backgroundColor: color.red,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '50%',
  },
  buttonContainer: {
    width: '50%',
  
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.white,
  },
});

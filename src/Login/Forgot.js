import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ForgotEmail from '../Component/input/forgotEmail';
import ForgotPhNo from '../Component/input/forgotPhNo';
import normalize from 'react-native-normalize';
const {height, width} = Dimensions.get('screen');
import color from '../Assets/colors/colors';
import {setOtptype} from '../Redux/Actions/actions';

import {useSelector, useDispatch} from 'react-redux';
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
  });
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../Assets/Mask.png')}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <ScrollView style={styles.contentStyle}>
          <View>
            <Text style={styles.forgotStyle}>Forgot Password?</Text>
          </View>
          <TouchableOpacity
            style={styles.inputContainer}
            onPress={() => {
              dispatch(setOtptype(1));
              navigation.navigate('ForgotPhone');
            }}>
            <ForgotPhNo placeholder="Password" placeholderTextColor="#444444" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputContainer}
            onPress={() => {
              dispatch(setOtptype(2));
              navigation.navigate('ForgotEmail');
            }}>
            <ForgotEmail placeholder="Email" placeholderTextColor="#444444" />
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  backgroundImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoStyle: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginVertical: 40,
  },
  logoImg: {
    width: '35%',
    height: normalize(180),
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotStyle: {
    width: '100%',
    textAlign: 'center',
    color: color.btnColor,
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  contentStyle: {
    width: '90%',
    marginTop: 60,
  },
  loginBtn: {
    paddingHorizontal: 20,
    backgroundColor: color.purple,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '40%',
  },
  loginText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  orLoginCont: {
    marginVertical: 20,
  },
  orLoginStyle: {
    width: '100%',
    textAlign: 'center',
    color: '#646464',
    fontSize: 22,
  },
  accStyle: {
    fontSize: 20,
    color: color.default,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  registerNow: {
    fontSize: 20,
    color: color.purple,
    textDecorationColor: color.purple,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  iconContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },
  haveAcc: {
    color: color.default,
    fontSize: 18,
  },
  googleImg: {
    height: normalize(43),
    width: normalize(43),
    marginRight: 15,
  },
});

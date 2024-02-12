import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../Assets/colors/colors';
import ForgotPhoneNumber from '../Component/input/ForgotPhoneNumber';
import normalize from 'react-native-normalize';

const ForgotPhone = () => {
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
          <View style={styles.inputContainer}>
            <ForgotPhoneNumber
              placeholder="Phone Number"
              placeholderTextColor="#444444"
            />
          </View>

          <Text style={styles.sendSms}>
            We have send you as SMS with a code
          </Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate('DigitCode');
            }}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ForgotPhone;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  sendSms: {
    marginTop: 20,
    fontFamily: 'Segoe UI, Regular',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    color: color.default,
  },
  backgroundImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loginBtn: {
    marginTop: 30,
    width: '50%',
    borderRadius: 6,
    backgroundColor: color.btnColor,
    textAlign: 'center',
    height: normalize(55),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 40,
    fontWeight: 'bold',
  },

  forgotStyle: {
    width: '100%',
    textAlign: 'center',
    color: color.btnColor,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  contentStyle: {
    width: '90%',
    marginTop: 60,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

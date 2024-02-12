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
  Platform,
  ToastAndroid,
} from 'react-native';
import {setEmail} from '../Redux/Actions/actions';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../Assets/colors/colors';
import C_TextInput from '../Component/input/input';
import normalize from 'react-native-normalize';

import {useSelector, useDispatch} from 'react-redux';
const ForgotEmail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmails] = useState(null);
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
  });
  const NextToNavigate = () => {
    if (email === null) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Please Enter Email', ToastAndroid.SHORT);
      } else {
        alert('Please Enter Email');
      }
    } else {
      dispatch(setEmail(email));
      navigation.navigate('DigitCode');
    }
  };
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
            <C_TextInput
              placeholder="Email"
              placeholderTextColor="#444444"
              onChangeText={e => setEmails(e)}
            />
          </View>

          <Text style={styles.sendSms}>
            We have send you as SMS with a code
          </Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              NextToNavigate();
            }}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ForgotEmail;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    height: 45,
    marginLeft: 20,
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  sendSms: {
    marginTop: 25,
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
    marginTop: 35,
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

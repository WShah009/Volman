import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import icons from '../Assets/app_icon/icons';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';
import PasswordInput from '../Component/input/passwordInput';

import {useSelector, useDispatch} from 'react-redux';
const ResetPassword = () => {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
  });
  var myHeaders = new Headers();
  myHeaders.append('Cookie', 'PHPSESSID=iku0d8nc8jf80ll9ate1qpbr2f');

  const {email} = useSelector(state => state.OrganizationReducer);
  const Resetpassword = async () => {
    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);
    formdata.append('confirm_password', confirmPassword);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    await fetch(
      'https://fisdemoprojects.com/volmanNew/api/forget-password.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(({success, failed}) => {
        if (success) {
          navigation.navigate('LoginScreen');
        } else if (failed) {
          console.log('Failed');
        }
      })
      .catch(error => console.log('error', error));
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../Assets/Mask.png')}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView style={styles.contentStyle}>
          <View style={styles.forget}>
            <Text style={styles.textforget}>Reset Password</Text>
            <Text style={styles.codeText}>
              Set the new password for your account so you can login{' '}
            </Text>
            <View style={styles.inputContainer}>
              <PasswordInput
                placeholder="Password"
                placeholderTextColor="#444444"
                onChangeText={e => setPassword(e)}
              />
            </View>
            <View style={styles.inputContainer}>
              <PasswordInput
                placeholder="Confirm Password"
                placeholderTextColor="#444444"
                onChangeText={conpass => setConfirmPassword(conpass)}
              />
            </View>

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                Resetpassword();
              }}>
              <Text style={styles.btnText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  textforget: {
    color: color.btnColor,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#272075',
    marginTop: 30,
    marginBottom: 20,
  },
  codeText: {
    fontFamily: 'Segoe UI, Regular',
    color: color.default,
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loginBtn: {
    marginTop: 10,
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
  inputContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },
  contentStyle: {
    width: '95%',
    marginTop: 60,
  },
});

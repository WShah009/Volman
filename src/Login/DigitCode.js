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
  Platform,
  ToastAndroid,
  SafeAreaView,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CodeVerification from '../Component/CodeVerification';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';
import {useIsFocused} from '@react-navigation/native';
const CELL_COUNT = 4;
const DigitCode = ({route}) => {
  const isFocused = useIsFocused();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [otp, setOtp] = useState('');
  const {otptype, email} = useSelector(state => state.OrganizationReducer);
  console.log(otptype, email, 'Redux otp type');
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
  });

  const Email = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=u5cttg9uojhekenjdvblj4023k');

    var formdata = new FormData();
    formdata.append('email', email);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'https://fisdemoprojects.com/volmanNew/api/send-otp-forgetpassword.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(({success, otp}) => {
        console.log(success, otp), setOtp(otp);
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    if (otptype == 2) {
      Email();
    } else {
      console.log('PHONE');
    }
  }, [isFocused]);
  const NavigateToNext = async () => {
    if (otp && otp == value) {
      navigation.navigate('ResetPassword');
    } else {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Invalid Code', ToastAndroid.SHORT);
      } else {
        alert('Invalid Code');
      }
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../Assets/Mask.png')}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <ScrollView style={styles.contentStyle}>
          <View style={styles.forget}>
            <Text style={styles.enterFourDigit}>Enter 4 Digit Code</Text>
            <Text style={styles.codeText}>
              Enter 4 Digit code that you received on your to a number or Email
            </Text>
            <SafeAreaView style={styles.root}>
              <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </SafeAreaView>
            <View style={styles.codeBtnContainer}>
              <Text style={styles.codeText}>Don't received any code?</Text>
              <Text style={styles.resendCode}>Resend a new code</Text>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  NavigateToNext();
                }}>
                <Text style={styles.btnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default DigitCode;

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 10},
  codeFieldRoot: {
    marginTop: 10,
  },
  cell: {
    width: normalize(60),
    height: normalize(60),
    lineHeight: 55,
    fontSize: 30,
    borderWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
    backgroundColor: 'white',
    color: color.btnColor,
    fontWeight: 'bold',
    borderRadius: 2,
  },
  focusCell: {
    borderColor: '#000',
  },
  enterFourDigit: {
    color: color.btnColor,
    fontSize: 22,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#272075',
    marginBottom: 30,
    marginTop: 80,
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  codeText: {
    color: color.default,
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
  resendCode: {
    marginTop: 5,
    fontFamily: 'Georgia, serif',
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    color: '#272075',
    fontWeight: 'bold',
  },
  backgroundImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loginBtn: {
    marginTop: 20,
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
  codeBtnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    width: '95%',
    marginTop: 60,
  },
});

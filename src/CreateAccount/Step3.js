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
  ToastAndroid,
  SafeAreaView,
  NativeModules,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import CodeVerification from '../Component/CodeVerification';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SmsUserConsent from 'react-native-sms-user-consent';

import {useSelector, useDispatch} from 'react-redux';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 4;
let DirectSms = NativeModules.DirectSms;
const Step3 = ({route}) => {
  const {type} = route.params;
  console.log(type, 'TYPE');
  const [otp, setOtp] = useState('');
  const [data, setUserData] = useState('');
  const [value, setValue] = useState('');

  const {email} = useSelector(state => state.OrganizationReducer);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
  });
  const GetUserData = async () => {
    const value = await AsyncStorage.getItem('@user_Key');
    console.log(value, 'value get');

    setUserData(JSON.parse(value));
  };

  const Email = () => {
    console.log(email);
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
      'https://fisdemoprojects.com/volmanNew/api/registration_otp.php',
      requestOptions,
    )
      .then(response => response.json())
      .then(({success, otp, failed}) => {
        if (success) {
          console.log('recevid opt',otp);
          if (Platform.OS === 'android') {
            ToastAndroid.show('Otp Send', ToastAndroid.SHORT);
          } else {
            alert('Otp Send');
          }
          setOtp(otp);
        } else if (failed) {
          if (Platform.OS === 'android') {
            ToastAndroid.show('Failed Try Again', ToastAndroid.SHORT);
          } else {
            alert('Failed try Again');
          }
        }
      })
      .catch(error => console.log('error1234', error));
  };

  const NavigateToNext = async () => {
    if (otp && otp == value) {
      navigation.navigate('Step4');
    } else {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Invalid Code', ToastAndroid.SHORT);
      } else {
        alert('Invalid Code');
      }
    }
  };
  const sendDirectSms = async () => {

    if (data?.phno) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.SEND_SMS,
          {
            title: 'Send SMS App Sms Permission',
            message:
              'Send SMS App needs access to your inbox ' +
              'so you can send messages in background.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          DirectSms.sendDirectSms(
            data?.phno,
            `Your Otp code is ${data?.otpcode}`,
          );
          alert('SMS sent');
        } else {
          alert('SMS permission denied');
        }
      } catch (error) {
        console.warn(error);
        alert(error);
      }
    }
  };
  const handleSendOtp = async () => {

    
    try {
      const result = await SmsUserConsent.requestPhoneNumberUserConsent();
      console.log(result);
      if (result) {
        const message = `Your OTP is: ${result}`;

        // Use any SMS API to send message to user's phone number
        // Here, we are using the `react-native-sms-user-consent` package to send message
        const sendResult = await SmsUserConsent.sendSMS(data?.phno, message);

        if (sendResult) {
          Alert.alert('OTP sent successfully');
        } else {
          Alert.alert('Failed to send OTP');
        }
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     await GetUserData();
  //   };
  //   fetchdata().catch(err => console.log(err));
  // }, []);
  useEffect(() => {
    if (type == 1) {
      Email();
    } else {
      sendDirectSms();
    }
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../Assets/Mask.png')}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <ScrollView style={styles.contentStyle}>
          <Text style={styles.verificationText}>Account Verification </Text>
          <Text style={styles.textforget1}>Enter your OTP code here</Text>
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

          <View style={styles.codeStyle}>
            <Text style={styles.textforget1}>Don't received any code?</Text>
            <Text style={styles.textforgets2}>Resend a new code</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={NavigateToNext}>
              <Text style={styles.btnText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '15%',
    height: 60,
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    marginTop: 10,
  },
  forget: {
    marginBottom: 300,
  },

  textforget: {
    color: 'black',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 100,
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
  },

  textforget1: {
    fontFamily: 'Segoe UI, Regular',
    color: color.default,
    fontSize: 15,
    textAlign: 'center',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  boxset: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: 10,
    marginBottom: 30,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  backgroundImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loginBtn: {
    marginTop: 27,
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
    fontSize: 17,
    fontWeight: 'bold',
  },
  contentStyle: {
    marginTop: 30,
    width: '90%',
  },
  verificationText: {
    color: color.btnColor,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  codeStyle: {
    marginTop: 10,
  },
  textforgets2: {
    marginTop: 15,
    color: color.btnColor,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
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
});

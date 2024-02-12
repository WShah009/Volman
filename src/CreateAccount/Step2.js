import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import {Checkbox} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';
import CheckBox1 from '@react-native-community/checkbox';
const Step1 = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
  });
  const [SMSChecked, setSMSChecked] = React.useState(false);
  const [emailChecked, setEmailChecked] = React.useState(false);
  
  const [type, setType] = React.useState(null);
  const handleSMSCheck = () => {
    setSMSChecked(true);
    setEmailChecked(false);
  };

  const handleEmailCheck = () => {
    setSMSChecked(false);
    setEmailChecked(true);
  };
  const NextToNavigate = () => {
    if (type === null) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Select Otp Sending type', ToastAndroid.SHORT);
      } else {
        alert('Select Otp Sending type');
      }
    } else {
      navigation.navigate('Step3', {
        type: type,
      });
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../Assets/Mask.png')}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <ScrollView style={styles.contentStyle}>
          <Text style={styles.verificationText}>Account Verification</Text>
           {/* <Checkbox borderColor={color.default}  value="0" accessibilityLabel="This is a dummy checkbox" /> */}
           
          {/* <View style={styles.checkboxCont}>
            <CheckBox1
              value={SMSChecked}
              onValueChange={() => {
                handleSMSCheck();
                setType(0);  
              }}
            />
            <Text style={styles.sendYouCode}>Send you a code on phone</Text>
          </View> */}
          
          <View style={styles.checkboxCont}>
            {/* <Checkbox
              borderColor={color.default}
              value="1"
              accessibilityLabel="This is a dummy checkbox"
            /> */}
            <CheckBox1
              value={emailChecked}
              onValueChange={() => {
                handleEmailCheck();
                setType(1);
              }}
            />
            <Text style={styles.sendYouCode}>Send you a code on Email</Text>
          </View>
          <Text style={styles.textforget1}>
            {' '}
            We have send you as SMS with a code to Email
          </Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              NextToNavigate();
            }}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '85%',
    height: 45,
    marginLeft: 30,
    fontSize: 20,
  },
  forget: {
    marginBottom: 300,
  },
  verificationText: {
    color: color.btnColor,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  },

  textforget1: {
    marginTop: 15,
    fontFamily: 'Segoe UI, Regular',
    color: color.default,
    fontSize: 15,
    textAlign: 'center',
  },

  sendYouCode: {
    color: color.btnColor,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    paddingHorizontal: 5,
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
  checkboxCont: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
});

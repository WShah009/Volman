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
import {Checkbox} from 'native-base';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PasswordInput from '../Component/input/passwordInput';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import * as yup from 'yup';
import {APIS} from '../Apiurls/Apis';
const SignupValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password Must Contain atleast 8 Character one is Uppercase letter and one is lowercase letter one number',
    ),
  confirmpass: yup
    .string()
    .min(8)
    .oneOf([yup.ref('password')], 'Your Password do not matched')
    .required('Confirm Password is required'),
});
const Step4 = () => {
  const [data, setUserData] = useState('');
  const [isVisible, setisVisible] = useState(false);
  const [isVisibleconfirm, setisVisibleconirm] = useState(false);
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

  useEffect(() => {
    GetUserData();
  }, []);
  return (
    <Formik
      initialValues={{
        password: '',
        confirmpass: '',
      }}
      onSubmit={values => {
        console.log(values);
        var myHeaders = new Headers();
        myHeaders.append('Cookie', 'PHPSESSID=r401kr29ocfrvv38emv2f0pcf0');

        var formdata = new FormData();
        formdata.append('first_name', data?.firstname);
        formdata.append('last_name', data?.lastname);
        formdata.append('email', data?.email);
        formdata.append('password', values?.password);
        formdata.append('phone', data?.phno);
        formdata.append('number_of_events', data?.eventscount);
        formdata.append('user_type', data?.usertype);
        formdata.append('title', data?.orgTitle);
        // formdata.append('longitude', data?.longitude);
        // formdata.append('latitude', data?.latitude);
        formdata.append('district_name', data?.districtname);
        formdata.append('zip_code', data?.zipcode);
        formdata.append('city', data?.city);
        formdata.append('country_code', data?.CountryCode);
        formdata.append('country_id', data?.CountryId);
        formdata.append('building_no', data?.buildingnumber);

        formdata.append('street_name', data?.street_name);
        formdata.append('preference', data?.preference);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow',
        };

        fetch(
          'https://fisdemoprojects.com/volmanNew/api/register.php',
          requestOptions,
        )
          .then(response => response.json())
          .then(result => {
            if (result?.status === 'success') {
              navigation.navigate('Step5');
            } else {
              console.log(JSON.stringify(result?.status));
              alert(result?.error);
            }
          })
          .catch(error => console.log('error', error));

        // fetch(APIS.Register, requestOptions)
        //   .then(response => response.json())
        //   .then(result => {
        //     if (result?.status === 'success') {
        //       navigation.navigate('LoginScreen');
        //     } else {
        //       console.log(JSON.stringify(result?.status));
        //       alert(result?.error);
        //     }
        //   })
        //   .catch(error => console.log('error', error));
      }}
      validationSchema={SignupValidationSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        isValid,
        setFieldValue,
        setFieldTouched,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          <ImageBackground
            source={require('./../Assets/Mask.png')}
            resizeMode="cover"
            style={styles.backgroundImg}>
            <ScrollView style={styles.contentStyle}>
              <Text style={styles.setPassword}>Set Password</Text>
              <View style={styles.inputContainer}>
                <PasswordInput
                  placeholder="Password"
                  placeholderTextColor="#444444"
                  onBlur={() => setFieldTouched('password')}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  secureTextEntry={isVisible ? false : true}
                  name={isVisible ? 'eye-off' : 'eye'}
                  onPress={() => {
                    setisVisible(!isVisible);
                  }}
                />
              </View>
              {touched.password && errors.password && (
                <Text style={{color: 'red', fontSize: 12, marginLeft: 20}}>
                  {errors.password}
                </Text>
              )}
              <View style={styles.inputContainer}>
                <PasswordInput
                  placeholder="Confirm Password"
                  placeholderTextColor="#444444"
                  value={values.confirmpass}
                  onBlur={() => setFieldTouched('confirmpass')}
                  onChangeText={handleChange('confirmpass')}
                  secureTextEntry={isVisibleconfirm ? false : true}
                  name={isVisibleconfirm ? 'eye-off' : 'eye'}
                  onPress={() => {
                    setisVisibleconirm(!isVisibleconfirm);
                  }}
                />
              </View>
              {touched.confirmpass && errors.confirmpass && (
                <Text style={{color: 'red', fontSize: 12, marginLeft: 20}}>
                  {errors.confirmpass}
                </Text>
              )}
              <View style={styles.baseText}>
                <Checkbox
                  borderColor={color.default}
                  value="test"
                  accessibilityLabel="This is a dummy checkbox"
                />
                <View style={styles.acceptTerms}>
                 
                  <Text style={styles.agreeText}>
                    I agree to accept the  </Text>
                    <TouchableOpacity
                   onPress={() => {
                    navigation.navigate('termsandcondtion');
                  }}
                  >
                    <Text style={styles.innerText}>
                      {' '}
                      terms of use &
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('privacypolicy');
                      }}
                    >
                    <Text style={styles.innerText}>
                      {' '}
                       privacy policy
                    </Text>
                    </TouchableOpacity>
                  
                
               
                 
                </View>
              </View>

              <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Submit</Text>
              </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
};

export default Step4;

const styles = StyleSheet.create({
  innerText: {
    color: color.btnColor,
    fontWeight: 'bold',
    lineHeight: 20,
    fontSize: 16,
  },
  agreeText: {
    color: color.default,
    paddingLeft: 5,
  },

  setPassword: {
    color: color.btnColor,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#272075',
    marginBottom: 30,
    marginTop: 50,
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
  acceptTerms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
  },
  baseText: {
    fontSize: 16,
    flexDirection: 'row',
    marginTop: 15,
    color: color.default,
    width: '100%',
    flexWrap: 'wrap',
  },
  inputContainer: {
    marginBottom: 14,
  },
});

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
  Picker,
  PermissionsAndroid,
} from 'react-native';

// import {Checkbox} from 'native-base';
import React, {useState, useRef} from 'react';
import icons from '../Assets/app_icon/icons';
import Step5 from './Step5';
import NoCode from '../Component/NoCode';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputFieldcode from '../Component/InputFieldcode';
import CountryCode from '../Component/CountryCode';
import C_TextInput from '../Component/input/input';
import NameInput from '../Component/input/NameInput';
import normalize from 'react-native-normalize';
import color from '../Assets/colors/colors';
import SelectMonthDropdown from '../Component/input/BirthMonthDropDown';
import SelectYearDropdown from '../Component/input/BirthYearDropDown';
import CheckBox1 from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import * as yup from 'yup';
import {set, zip} from 'lodash';
import sendSMS from 'react-native-sms';

import PhoneInput, {getCountryCallingCode} from 'react-native-phone-input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Geolocation from 'react-native-geolocation-service';
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    //console.log('granted', granted);
    if (granted === 'granted') {
      //console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};
const SignupValidationSchema = yup.object().shape({
  Firstname: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Please Enter Your First Name'),
  Email: yup
    .string()
    .required('Please Enter Your  Email')
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'Please enter valid email'),
  PhoneNumber: yup
    .string()
    .required('Phone Number is Required')
    .matches(/^\d+$/, 'Phone Number must be integer'),

  streetname: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Please Enter Street Name'),
  buildingnumber: yup.string().required('Required'),
  districtname: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Please Enter District Name'),
  zipcode: yup.string().required('Required'),
  eventscount: yup.string().required('Required'),
  orgnaizationTitle: yup.string().required('Required'),
  City: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Please Enter City'),
  //long: yup.string().min(1).required('Location is required'),
});

import {useSelector, useDispatch} from 'react-redux';
import {setEmail} from '../Redux/Actions/actions';
const Step1 = ({navigation, route}) => {
  const {otptype, email} = useSelector(state => state.OrganizationReducer);
  // const navigation = useNavigation();
  // navigation.setOptions({
  //   headerShown: true,
  //   headerTransparent: true,
  // });
  const {usertype} = route.params;
  console.log(usertype);
  const dispatch = useDispatch();
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [code, setCode] = useState(1234);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const phoneInput = useRef(null);
  const [CountryCodeValue, setCountryCode] = useState('us');
  const [CountryId, setCountryId] = useState('1');

  // Math.floor(1000 + Math.random() * 9000)
  const handleMaleCheck = () => {
    setMaleChecked(true);
    setFemaleChecked(false);
  };

  const handleFemaleCheck = () => {
    setMaleChecked(false);
    setFemaleChecked(true);
  };

  const storeData = async (
    firstname,
    lastname,
    email,
    phno,
    City,
    districtname,
    streetname,
    eventscount,
    orgTitle,
    // latitude,
    // longitude,
    CountryCode,
    CountryId,
    buildingnumber,
    zipcode,
    preference,
  ) => {
    try {
      let Data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phno: phno,
        city: City,
        districtname: districtname,
        streetname: streetname,

        usertype: usertype,
        eventscount: eventscount,
        orgTitle: orgTitle,
        // longitude: longitude,
        // latitude: latitude,
        CountryCode: CountryCode,
        CountryId: CountryId,
        buildingnumber: buildingnumber,
        zipcode: zipcode,
        preference:preference,
      };
      await AsyncStorage.setItem(
        '@user_Key',
        JSON.stringify(Data),
        console.log(Data, 'Value'),
      );
    } catch (e) {
      console.log(e);
    }
  };
  const messageFunction = (phoneNumber, message) => {
    sendSMS.send(
      {
        body: `${message}`,
        recipients: [phoneNumber],
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true,
      },
      (completed, cancelled, error) => {
        console.log(
          'SMS Callback: completed: ' +
            completed +
            ' cancelled: ' +
            cancelled +
            'error: ' +
            error,
        );
      },
    );
  };

  return (
    <Formik
      initialValues={{
        Firstname: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        streetname: '',
        districtname: '',
        zipcode: '',
        preference:'',
       // organizationtitle:'',
        departmentname:'',
        description:'',
        buildingnumber: '',
        City: '',
        long: '',
        lat: '',
        eventscount: usertype === 1 ? '' : 0,
        orgnaizationTitle: usertype === 1 ? '' : 'null',
      }}
      onSubmit={values => {
        console.log(values);
        dispatch(setEmail(values.Email));
        storeData(
          values.Firstname,
          values.LastName,
          values.Email,
          values.PhoneNumber,
          values.City,
          values.districtname,
          values.streetname,
          values.eventscount,
          values.orgnaizationTitle,
          values.lat,
          values.long,
          CountryCodeValue,
          CountryId,
          values.buildingnumber,
          values.zipcode,
          values.preference,
         // values.organizationtitle,
          values.departmentname,
          values.description,

        );
        navigation.navigate('Step2');
        // messageFunction('03155760623', 'Message OTP');
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
              <Text style={styles.textforget}>Create Account</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputContent}>
                  <NameInput
                    style={styles.inputStyle}
                    placeholder="First Name"
                    placeholderTextColor="#444444"
                    onChangeText={handleChange('Firstname')}
                    value={values.Firstname}
                    onBlur={() => setFieldTouched('Firstname')}
                    imageSource={icons.user}
                  />
                </View>

                <View style={styles.inputContent}>
                  <NameInput
                    style={styles.inputStyle}
                    placeholder="Last Name"
                    placeholderTextColor="#444444"
                    onChangeText={handleChange('LastName')}
                    imageSource={icons.user}
                  />
                </View>
              </View>
              {touched.Firstname && errors.Firstname && (
                <Text style={styles.validationerror}>{errors.Firstname}</Text>
              )}
              <View style={styles.inputCont}>
                <C_TextInput
                  icon="email"
                  style={styles.inputStyle}
                  placeholder="Email Address"
                  placeholderTextColor="#444444"
                  onChangeText={handleChange('Email')}
                  value={values.Email}
                  onBlur={() => setFieldTouched('Email')}
                />
              </View>
              {touched.Email && errors.Email && (
                <Text style={styles.validationerror}>{errors.Email}</Text>
              )}


<View style={styles.gender}>
                <View>
                  <Text style={styles.loginText1}>Gender</Text>
                </View>
                <View style={styles.gender1}>
                  <CheckBox1
                    value={maleChecked}
                    onValueChange={() => {
                      handleMaleCheck();
                      setFieldValue('gender', 0);
                    }}
                  />
                  <Text style={styles.loginText1}> Male </Text>
                  <CheckBox1
                    value={femaleChecked}
                    onValueChange={() => {
                      handleFemaleCheck();
                      setFieldValue('gender', 1);
                    }}
                  />
                  <Text style={styles.loginText1}> Female </Text>
                </View>
              </View>
              {touched.gender && errors.gender && (
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    marginLeft: 10,
                    alignSelf: 'flex-end',
                    bottom: 12,
                  }}>
                  {errors.gender}
                </Text>
              )}


<View style={styles.inputContainer}>
                <View style={styles.inputContent}>
                  <SelectMonthDropdown
                    defaultButtonText={'Birth Month'}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem);
                      setFieldValue('birthmonth', selectedItem);
                    }}
                  />
                </View>
                <View style={styles.inputContent}>
                  <SelectYearDropdown
                    defaultButtonText={'Birth Year'}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem);
                      setFieldValue('birthYear', selectedItem);
                    }}
                  />
                </View>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {touched.birthmonth && errors.birthmonth && (
                  <Text style={styles.validationerror}>
                    {errors.birthmonth}
                  </Text>
                )}
                {touched.birthYear && errors.birthYear && (
                  <Text style={styles.validationerror}>{errors.birthYear}</Text>
                )}
              </View>

              <View style={styles.phoneContent}>
                <View style={styles.container}>
                  <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    onSelectCountry={values => {
                      setCountryId(phoneInput.current.getCountryCode());
                      setCountryCode(values);
                    }}
                    containerStyle={styles.phoneContainer}
                    textContainerStyle={styles.textInput}
                    onPressConfirm={v => {
                      console.log(v);
                    }}
                    textStyle={styles.codeStyle}
                    flagStyle={styles.flagImg}
                    // defaultCountry="us"
                    defaultCode="DM"
                    layout="second"
                    withShadow
                    initialCountry="us"
                    autoFocus
                  />
                </View>



                

                <View style={[styles.inputViewphoneno, styles.inputsetting]}>
                  <TextInput
                    style={styles.TextInputSty}
                    placeholder="Phone number"
                    placeholderTextColor="#444444"
                    keyboardType="numeric"
                    onChangeText={handleChange('PhoneNumber')}
                    value={values.PhoneNumber}
                    onBlur={() => setFieldTouched('PhoneNumber')}
                  />
                </View>
              </View>

              {/* <View style={styles.inputCont}>
                <C_TextInput
                  icon="home"
                  style={styles.inputStyle}
                  placeholder="City"
                  placeholderTextColor="#444444"
                  onChangeText={handleChange('City')}
                  value={values.Address}
                  onBlur={() => setFieldTouched('City')}
                />
              </View>
              {touched.City && errors.City && (
                <Text style={styles.validationerror}>{errors.City}</Text>
              )} */}
              {/* //Change from here */}
              {/* <View style={styles.inputCont}>
                <C_TextInput
                  style={styles.inputStyle}
                  placeholder="Street"
                  placeholderTextColor="#444444"
                  onChangeText={handleChange('streetname')}
                  value={values.Address}
                  onBlur={() => setFieldTouched('streetname')}
                />
              </View>
              {touched.streetname && errors.streetname && (
                <Text style={styles.validationerror}>{errors.streetname}</Text>
              )} */}


              {/* <View style={styles.inputCont}>
                <C_TextInput
                  style={styles.inputStyle}
                  placeholder="Building/Appartment"
                  placeholderTextColor="#444444"
                  onChangeText={handleChange('buildingnumber')}
                  value={values.Address}
                  onBlur={() => setFieldTouched('buildingnumber')}
                />
              </View>
              {touched.buildingnumber && errors.buildingnumber && (
                <Text style={styles.validationerror}>
                  {errors.buildingnumber}
                </Text>
              )} */}

              {/* <View style={styles.inputCont}>
                <C_TextInput
                  style={styles.inputStyle}
                  placeholder="District Name"
                  placeholderTextColor="#444444"
                  onChangeText={handleChange('districtname')}
                  value={values.Address}
                  onBlur={() => setFieldTouched('districtname')}
                />
              </View>
              {touched.districtname && errors.districtname && (
                <Text style={styles.validationerror}>
                  {errors.districtname}
                </Text>
              )} */}
              <View style={styles.inputCont}>
                <C_TextInput
                  style={styles.inputStyle}
                  placeholder="Address"
                  placeholderTextColor="#444444"
                  onChangeText={handleChange('zipcode')}
                  value={values.Address}
                  onBlur={() => setFieldTouched('zipcode')}
                  imageSource={icons.locationad}

                />
              </View>
              {touched.zipcode && errors.zipcode && (
                <Text style={styles.validationerror}>{errors.zipcode}</Text>
              )}
    <View style={styles.inputCont}>
    <View style={styles.inputContainer}>
                <View style={styles.inputContent}>
                  <NameInput
                    style={styles.inputStyle}
                    placeholder="City"
                    placeholderTextColor="#444444"
                    onChangeText={handleChange('Firstname')}
                    value={values.Firstname}
                    onBlur={() => setFieldTouched('Firstname')}
                    imageSource={icons.city}
                  />
                </View>

                <View style={styles.inputContent}>
                  <NameInput
                    style={styles.inputStyle}
                    placeholder="Zip Code"
                    placeholderTextColor="#444444"
                    onChangeText={handleChange('LastName')}
                    imageSource={icons.zipid}
                  />
                </View>
              </View>
              {touched.Firstname && errors.Firstname && (
                <Text style={styles.validationerror}>{errors.Firstname}</Text>
              )}



    {/* <C_TextInput
                    style={{width: '100%'}}
                    placeholder="Organization Title"
                    placeholderTextColor="#444444"
                    onChangeText={handleChange('orgnaizationTitle')}
                    value={values.orgnaizationTitle}
                    onBlur={() => setFieldTouched('orgnaizationTitle')}
                  />
                  {touched.orgnaizationTitle && errors.orgnaizationTitle && (
                    <Text style={styles.validationerror}>
                      {errors.orgnaizationTitle}
                    </Text>
                  )} */}



                <C_TextInput
                  style={styles.inputStyle}
                  placeholder="State"
                  placeholderTextColor="#444444"
                  onChangeText={handleChange('departmentname')}
                  value={values.departmentname}
                  onBlur={() => setFieldTouched('departmentname')}
                  imageSource={icons.state}

                />
                   {touched.departmentname && errors.departmentname && (
                <Text style={styles.validationerror}>{errors.departmentname}</Text>
              )}
              </View>
           

              {usertype === 1 ? (
                <View style={styles.inputCont}>
                  <C_TextInput
                    style={{width: '100%'}}
                    placeholder="Number of Annual events"
                    placeholderTextColor="#444444"
                    onChangeText={handleChange('eventscount')}
                    value={values.eventscount}
                    onBlur={() => setFieldTouched('eventscount')}
                  />
                  {touched.eventscount && errors.eventscount && (
                    <Text style={styles.validationerror}>
                      {errors.eventscount}
                    </Text>
                  )}

<C_TextInput
                  style={styles.inputStyle}
                  placeholder="Description"
                  placeholderTextColor="#444444"
                  onChangeText={handleChange('description')}
                  value={values.description}
                  onBlur={() => setFieldTouched('description')}
                />
                   {touched.description && errors.description && (
                <Text style={styles.validationerror}>{errors.description}</Text>
              )}
                  
                  
                 
                </View>
                
              ) : null}

              {touched.PhoneNumber && errors.PhoneNumber && (
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    marginLeft: 40,
                    alignSelf: 'center',
                  }}>
                  {errors.PhoneNumber}
                </Text>
              )}

              {/* <View style={styles.gender}>
                <View>
                  <Text style={styles.loginText1}>Gender</Text>
                </View>
                <View style={styles.gender1}>
                  <CheckBox1
                    value={maleChecked}
                    onValueChange={() => {
                      handleMaleCheck();
                      setFieldValue('gender', 0);
                    }}
                  />
                  <Text style={styles.loginText1}> Male </Text>
                  <CheckBox1
                    value={femaleChecked}
                    onValueChange={() => {
                      handleFemaleCheck();
                      setFieldValue('gender', 1);
                    }}
                  />
                  <Text style={styles.loginText1}> Female </Text>
                </View>
              </View>
              {touched.gender && errors.gender && (
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    marginLeft: 10,
                    alignSelf: 'flex-end',
                    bottom: 12,
                  }}>
                  {errors.gender}
                </Text>
              )}
              <View style={styles.inputContainer}>
                <View style={styles.inputContent}>
                  <SelectMonthDropdown
                    defaultButtonText={'Birth Month'}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem);
                      setFieldValue('birthmonth', selectedItem);
                    }}
                  />
                </View>
                <View style={styles.inputContent}>
                  <SelectYearDropdown
                    defaultButtonText={'Birth Year'}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem);
                      setFieldValue('birthYear', selectedItem);
                    }}
                  />
                </View>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {touched.birthmonth && errors.birthmonth && (
                  <Text style={styles.validationerror}>
                    {errors.birthmonth}
                  </Text>
                )}
                {touched.birthYear && errors.birthYear && (
                  <Text style={styles.validationerror}>{errors.birthYear}</Text>
                )}
              </View> */}

              {/* <TouchableOpacity
                style={styles.loginBtn}
                onPress={async () => {
                  const hasPermission = await requestLocationPermission();
                  if (!hasPermission) {
                    return;
                  }
                  Geolocation.getCurrentPosition(
                    async position => {
                      setFieldValue('lat', position.coords.latitude);
                      setFieldValue('long', position.coords.longitude);

                      console.log('Position....... Called.......', position);
                    },
                    error => {
                      Alert.alert(`Code ${error.code}`, error.message);
                      //setLocation(null);
                    },
                    {
                      accuracy: {
                        android: 'high',
                        ios: 'best',
                      },
                      enableHighAccuracy: true,
                      timeout: 15000,
                      maximumAge: 10000,
                      distanceFilter: 0,
                      forceRequestLocation: true,
                      forceLocationManager: false,
                      showLocationDialog: true,
                    },
                  );
                }}>
                <Text style={styles.loginText}>Set Current Location</Text>
              </TouchableOpacity> */}

              {touched.long && errors.long && (
                <Text style={{color: 'red', fontSize: 12, alignSelf: 'center'}}>
                  {errors.long}
                </Text>
              )}
              <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
                <Text style={styles.loginText}>Next</Text>
              </TouchableOpacity>

              <View style={styles.accountCont}>
                <Text style={styles.accText}>Already have account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('LoginScreen');
                  }}>
                  <Text style={styles.register}>Login</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      )}
    </Formik>
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

  checkboxStyle: {
    backgroundColor: 'transparent',
  },
  textforget: {
    color: color.btnColor,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 50,
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 0,
  },
  marginsecondinput: {
    marginTop: 5,
  },
  textforget1: {
    marginTop: 25,
    fontFamily: 'Georgia, serif',
    color: color.default,
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
  },

  loginBtn: {
    marginTop: 25,
    width: '50%',
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.btnColor,
    alignSelf: 'center',
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  iconsinputsetting: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 8,
  },
  inputsetting: {
    flexDirection: 'row',
  },
  ishide: {
    marginLeft: 150,
  },
  ishide2: {
    marginLeft: 97,
  },
  inputViewoptioncountry: {
    backgroundColor: '#fff',
    borderRadius: 6,
    width: '30%',
    fontSize: 18,
    paddingHorizontal: 5,
  },
  inputViewphoneno: {
    backgroundColor: '#fff',
    borderRadius: 6,
    width: '67%',
    height: normalize(55),
    marginLeft: 10,
    fontSize: 20,
  },
  phoneContent: {
    flexDirection: 'row',
    marginTop: 5,
  },
  inputView1: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '37%',
    height: 45,
    marginLeft: '9%',
    fontSize: 20,
  },
  gender: {
    marginTop: 12,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  gender1: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  loginText1: {
    color: color.default,
    fontSize: 15,
    marginLeft: 2,
  },
  maleText: {
    marginLeft: 15,
    backgroundColor: 'transparent',
  },
  validationerror: {
    marginBottom: 1,
    marginTop: -4,
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
  accText: {
    alignItems: 'center',
    fontSize: 15,
    color: color.default,
  },
  accountCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  register: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: color.btnColor,
    paddingLeft: 5,
  },
  contentStyle: {
    marginTop: 30,
    width: '90%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContent: {
    width: '49%',
  },

  backgroundImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  phoneContainer: {
    marginTop: 7,
  },
  TextInputSty: {
    fontSize: 15,
    color: color.default,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: 6,
    paddingLeft: 5,
  },
  phoneContainer: {
    width: '100%',
    height: 50,
  },

  textInput: {
    fontSize: 12,
  },
  flagImg: {
    height: normalize(33),
    width: normalize(50),
  },
  codeStyle: {
    fontSize: 14,
  },
});

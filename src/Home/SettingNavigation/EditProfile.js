import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  TextInput,
} from 'react-native';
import React, {useEffect, useState, forwardRef} from 'react';
import Header from '../../Component/Header';
import color from '../../Assets/colors/colors';

//import {Checkbox} from 'native-base';
import SelectMonthDropdown from '../../Component/input/BirthMonthDropDown';
import SelectYearDropdown from '../../Component/input/BirthYearDropDown';
import normalize from 'react-native-normalize';
import NameInput from '../../Component/input/NameInput';
import CheckBox1 from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Entypo';
import CountryCode from '../../Component/CountryCode';
import BorderInput from '../../Component/input/BorderInput';
import EmailBorder from '../../Component/input/Emailborder';
import CountryCodeBorder from '../../Component/CountryCodeBorder';
import C_TextInput from '../../Component/input/input';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Formik} from 'formik';
import * as yup from 'yup';
import {APIS} from '../../Apiurls/Apis';
import {useSelector, useDispatch} from 'react-redux';
import {setUserimage} from '../../Redux/Actions/actions';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width} = Dimensions.get('window');

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
  PhoneNumber: yup.string().required('Phone Number is Required'),
  // birthmonth: yup.string().required('Select Birth Month'),
  // birthYear: yup.string().required('Select Birth Year'),
  // gender: yup.string().required('Choose Gender '),
  streetname: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Please Enter Street Name'),
  buildingnumber: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Please Enter Building Number'),
  districtname: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Please Enter District Name'),
  zipcode: yup.string().required('Required'),
  City: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Please Enter City'),
});

const EditProfile = ({navigation}) => {
  let profile_Image = null;
  const [maleChecked, setMaleChecked] = React.useState(false);
  const [femaleChecked, setFemaleChecked] = React.useState(false);
  const [email, setEmail] = useState(global.email);
  const [city, setCity] = useState(global.city);
  const [first_name, setFname] = useState(global.Firstname);
  const [phno, setphno] = useState(global.phone);
  const [zipcode, setZipcode] = useState(global.zip_code);
  const [buildingno, setbuildingno] = useState(global.building_number);
  const [districname, setdistrictname] = useState(global.district_name);
  const [streetname, setstreetname] = useState(global.street_name);

  const [lastname, setLastName] = useState(global.LastName);
  const [image, setImage] = useState('');
  const [logo, setLogoData] = useState('');
  const [countryId, setCountryId] = useState(global.countryId);
  const phoneInput = React.useRef(null);
  const [country_code, setCountryCode] = useState(global.countryCode);
  const isfocused = useIsFocused();
  const dispatch = useDispatch();
  // const checkGender = () => {
  //   if (gender === '0') {
  //     setMaleChecked(true);
  //   } else if (gender === '1') {
  //     setFemaleChecked(true);
  //   }
  // };

  // const handleMaleCheck = () => {
  //   setMaleChecked(true);
  //   setFemaleChecked(false);
  // };

  // const handleFemaleCheck = () => {
  //   setMaleChecked(false);
  //   setFemaleChecked(true);
  // };
  const onGallery = async () => {
    const options = {
      title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      },
    };
    const result = await launchImageLibrary(options);
    console.log(result);

    if (result.didCancel) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('You cancel the Gallery', ToastAndroid.SHORT);
      } else {
        alert('You cancel the Gallery');
      }
    } else if (result.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (result.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      setImage(result.assets[0]);
      const imageName = result.assets[0].uri?.split('/').pop();
      console.log('path', imageName);
      storeLogo(
        result.assets[0].uri,
        result.assets[0].type,
        result.assets[0].fileName,
      );
    }
  };
  const storeLogo = async (uri, type, fileName) => {
    try {
      let Data = {
        uri: uri,
        type: type,
        fileName: fileName,
      };
      await AsyncStorage.setItem(
        '@Logo_Key',
        JSON.stringify(Data),
        console.log(Data, 'Value'),
      );
    } catch (e) {
      console.log(e);
    }
  };

  const GetLogoData = async () => {
    const value = await AsyncStorage.getItem('@Logo_Key');
    console.log(value, 'value Logo get');

    setLogoData(JSON.parse(value));
  };
  useEffect(() => {
    GetLogoData();
  }, [isfocused]);

  return (
    <Formik
      initialValues={{
        Firstname: first_name,
        LastName: lastname,
        Email: email,
        PhoneNumber: phno,
        streetname: streetname,
        districtname: districname,
        zipcode: zipcode,
        buildingnumber: buildingno,
        City: city,
      }}
      onSubmit={values => {
        console.log(values);
        if (image) {
          var myHeaders = new Headers();
          myHeaders.append(
            'Cookie',
            'PHPSESSID=326ecb06ca75cb57bef397107597abcc',
          );

          var formdata = new FormData();
          formdata.append('id', global.userid);
          formdata.append('first_name', values.Firstname);
          formdata.append('last_name', values.LastName);
          formdata.append('phone', values.PhoneNumber);
          formdata.append('email', values.Email);
          formdata.append('zip_code', values.zipcode);
          formdata.append('district_name', values.districtname);
          // if (image === null || image === '') {
          //   formdata.append('image', {
          //     uri: logo.uri,
          //     type: logo.type,
          //     name: logo.fileName,
          //   });
          // } else {
          formdata.append('image', {
            uri: image.uri,
            type: image.type,
            name: image.fileName,
          });
          //  }
          formdata.append('country_id', countryId);
          formdata.append('country_code', country_code);
          formdata.append('city', values.City);
          formdata.append('street_name', values.streetname);
          formdata.append('building_no', values.buildingnumber);
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
          };
          fetch(APIS.updateProfile, requestOptions)
            .then(response => response.json())
            .then(result => {
              console.log(result.response_desc);

              if (result.response_desc === 'Record Updated') {
                dispatch(setUserimage(image.uri?.split('/').pop()));
                if (Platform.OS === 'android') {
                  ToastAndroid.show('Record Updated', ToastAndroid.SHORT);
                } else {
                  alert('Record Updated');
                }
                navigation.goBack();
              } else {
                if (Platform.OS === 'android') {
                  ToastAndroid.show(
                    'Some Thing Went Wrong',
                    ToastAndroid.SHORT,
                  );
                } else {
                  alert('Some Thing Went Wrong');
                }
              }
            })
            .catch(error => console.log('error', error));
        } else {
          if (Platform.OS === 'android') {
            ToastAndroid.show('Select Image', ToastAndroid.SHORT);
          } else {
            alert('Select Image');
          }
        }
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
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Header Text="Edit Profile" />
          <ScrollView style={styles.contentStyle}>
            <View style={styles.imageContainer}>
              {!image ? (
                <Image
                  source={require('../../Assets/profile_image.png')}
                  style={{
                    width: 120,
                    height: 120,
                    alignSelf: 'center',
                    marginVertical: 15,
                    borderWidth: 3,
                    borderColor: color.white,
                    borderRadius: 120,
                  }}
                />
              ) : (
                <Image
                  source={{uri: image.uri}}
                  style={{
                    width: 120,
                    height: 120,
                    alignSelf: 'center',
                    marginVertical: 15,

                    borderRadius: 120,
                  }}
                />
              )}
              <TouchableOpacity
                onPress={onGallery}
                style={{
                  backgroundColor: color.white,
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',

                  position: 'absolute',

                  marginTop: 100,
                  marginLeft: 200,
                }}>
                <Icon name="camera" size={25} color={color.black} />
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <View style={styles.contentStyle}>
                <View style={styles.inputContainer}>
                  <View style={styles.inputContent}>
                    <BorderInput
                      style={styles.inputStyle}
                      placeholder="First Name"
                      placeholderTextColor="#444444"
                      onChangeText={handleChange('Firstname')}
                      value={values.Firstname}
                      onBlur={() => setFieldTouched('Firstname')}
                    />
                  </View>
                  <View style={styles.inputContent}>
                    <BorderInput
                      value={values.LastName}
                      style={styles.inputStyle}
                      placeholder="Last Name"
                      placeholderTextColor="#444444"
                      onChangeText={handleChange('LastName')}
                    />
                  </View>
                </View>
                {touched.Firstname && errors.Firstname && (
                  <Text style={styles.validationerror}>{errors.Firstname}</Text>
                )}
                <View style={styles.inputCont}>
                  <EmailBorder
                    onChangeText={handleChange('Email')}
                    value={values.Email}
                    onBlur={() => setFieldTouched('Email')}
                    icon={'email'}
                    style={styles.inputStyl}
                    placeholder="Email Address"
                    placeholderTextColor="#444444"
                  />
                </View>
                {touched.Email && errors.Email && (
                  <Text style={styles.validationerror}>{errors.Email}</Text>
                )}
                <View style={styles.inputCont}>
                  <C_TextInput
                    icon="home"
                    style={styles.inputStyle}
                    placeholder="City"
                    placeholderTextColor="#444444"
                    onChangeText={handleChange('City')}
                    value={values.City}
                    onBlur={() => setFieldTouched('City')}
                  />
                </View>
                {touched.City && errors.City && (
                  <Text style={styles.validationerror}>{errors.City}</Text>
                )}
                <View style={styles.inputCont}>
                  <C_TextInput
                    style={styles.inputStyle}
                    placeholder="Street Name"
                    placeholderTextColor="#444444"
                    onChangeText={handleChange('streetname')}
                    value={values.streetname}
                    onBlur={() => setFieldTouched('streetname')}
                  />
                </View>
                {touched.streetname && errors.streetname && (
                  <Text style={styles.validationerror}>
                    {errors.streetname}
                  </Text>
                )}
                <View style={styles.inputCont}>
                  <C_TextInput
                    style={styles.inputStyle}
                    placeholder="Building Number"
                    placeholderTextColor="#444444"
                    onChangeText={handleChange('buildingnumber')}
                    value={values.buildingnumber}
                    onBlur={() => setFieldTouched('buildingnumber')}
                  />
                </View>
                {touched.buildingnumber && errors.buildingnumber && (
                  <Text style={styles.validationerror}>
                    {errors.buildingnumber}
                  </Text>
                )}

                <View style={styles.inputCont}>
                  <C_TextInput
                    style={styles.inputStyle}
                    placeholder="District Name"
                    placeholderTextColor="#444444"
                    onChangeText={handleChange('districtname')}
                    value={values.districtname}
                    onBlur={() => setFieldTouched('districtname')}
                  />
                </View>
                {touched.districtname && errors.districtname && (
                  <Text style={styles.validationerror}>
                    {errors.districtname}
                  </Text>
                )}
                <View style={styles.inputCont}>
                  <C_TextInput
                    style={styles.inputStyle}
                    placeholder="Zip Code"
                    placeholderTextColor="#444444"
                    onChangeText={handleChange('zipcode')}
                    value={values.zipcode}
                    onBlur={() => setFieldTouched('zipcode')}
                  />
                </View>
                {touched.zipcode && errors.zipcode && (
                  <Text style={styles.validationerror}>{errors.zipcode}</Text>
                )}

                <View style={styles.phoneContent}>
                  <CountryCodeBorder
                    ref={phoneInput}
                    initialCountry={country_code}
                    onSelectCountry={values => {
                      setCountryId(phoneInput.current.getCountryCode());
                      setCountryCode(values);
                    }}
                  />

                  <View style={[styles.inputViewphoneno, styles.inputsetting]}>
                    <TextInput
                      onChangeText={handleChange('PhoneNumber')}
                      value={values.PhoneNumber}
                      onBlur={() => setFieldTouched('PhoneNumber')}
                      style={styles.TextInputSty}
                      placeholder="Phone number"
                      placeholderTextColor="#444444"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
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
                {/* <View
                style={{
                  flexDirection: 'row',
                  marginTop: 12,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text
                    style={{fontSize: 15, color: color.default, marginLeft: 2}}>
                    Gender
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <CheckBox1
                    value={maleChecked}
                    onValueChange={() => {
                      handleMaleCheck();
                      setFieldValue('gender', 0);
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      color: color.default,
                      marginLeft: 2,
                      marginRight: 20,
                    }}>
                    Male
                  </Text>

                  <CheckBox1
                    value={femaleChecked}
                    onValueChange={() => {
                      handleFemaleCheck();
                      setFieldValue('gender', 1);
                    }}
                  />
                  <Text
                    style={{fontSize: 15, color: color.default, marginLeft: 2}}>
                    Female
                  </Text>
                </View>
              </View>
              {touched.gender && errors.gender && (
                <Text style={[styles.validationerror, {alignSelf: 'flex-end'}]}>
                  {errors.gender}
                </Text>
              )}
              <View style={styles.inputContainer}>
                <View style={styles.inputContent}>
                  <SelectMonthDropdown
                    defaultButtonText={months}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem);
                      setFieldValue('birthmonth', selectedItem);
                    }}
                  />
                </View>
                <View style={styles.inputContent}>
                  <SelectYearDropdown
                    defaultButtonText={years}
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
                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={handleSubmit}>
                  <Text style={styles.loginText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default EditProfile;

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
    marginBottom:15,
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
   // borderWidth: 1,
   elevation:1,
    borderColor: color.btnColor,
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
    flex: 1,
  },
  gender1: {
    flexDirection: 'row',
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
    width: '90%',
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
  imageContainer: {position: 'relative', flex: 1},
  validationerror: {color: 'red', fontSize: 12, marginLeft: 10},
  containerphone: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: 6,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: color.btnColor,
  },
  phoneContainer1: {
    width: '100%',
    height: 50,
  },

  textInputphone: {
    fontSize: 12,
  },
  flagImgphone: {
    height: normalize(33),
    width: normalize(50),
  },
  codeStylephone: {
    fontSize: 14,
  },
});

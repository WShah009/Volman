import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  PermissionsAndroid,
  Platform,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import color from '../../../Assets/colors/colors';

//import {Checkbox} from 'native-base';
import CountryCodeBorder from '../../../Component/CountryCodeBorder';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/Entypo';

import BorderInput from '../../../Component/input/BorderInput';
import EmailBorder from '../../../Component/input/Emailborder';
import Header from '../../../Component/Header';
import {Formik} from 'formik';
import * as yup from 'yup';
const {width} = Dimensions.get('window');
import {launchImageLibrary} from 'react-native-image-picker';
import C_TextInput from '../../../Component/input/input';
import Geolocation from 'react-native-geolocation-service';
import {APIS} from '../../../Apiurls/Apis';
const SignupValidationSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required(' Enter Organization Title'),
  email: yup
    .string()
    .required(' Enter Your  Email')
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'Please enter valid email'),
  phoneNumber: yup.string().required('Phone Number is Required'),
  description: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Enter Description'),
  departmentname: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Enter Department Name'),
  shortDescription: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Enter  Description'),
  address: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required(' Enter Address'),
  // long: yup
  //   .string()
  //   .min(1, 'Press This button to get location')
  //   .required('Location is Required'),
});
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
const AddOrgnaization = ({navigation}) => {
  let profile_Image = null;
  const [image, setImage] = useState('');

  const [description, setOrgDescription] = React.useState(
    global.orgdescription,
  );
  const [email, setEmail] = React.useState(global.orgemail);
  const [address, setAddress] = React.useState(global.orgaddress);
  const [department_name, setdepartmentname] = React.useState(
    global.orgdepartment_name,
  );
  const [phno, setphno] = React.useState(global.orgphone);
  const [img, setImg] = React.useState(global.orgimage);
  const [short_desc, setshortDescription] = React.useState(
    global.orgshort_description,
  );
  const [title, setTitle] = React.useState(global.orgtitle);

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
      console.log(result.assets[0]);
      setImage(result.assets[0]);
    }
  };
  useEffect(() => {}, []);
  return (
    <Formik
      initialValues={{
        title: title,
        departmentname: department_name,
        email: email,
        phoneNumber: phno,
        shortDescription: short_desc,
        description: description,
        address: address,
        // lat: global.orglatitude,
        // long: global.orglongitude,
      }}
      onSubmit={values => {
        console.log(values);
        if (image) {
          var myHeaders = new Headers();
          myHeaders.append(
            'Cookie',
            'PHPSESSID=e8dc1269cf42c7a86d6d79aa1eddd937',
          );
          var formdata = new FormData();
          formdata.append('id', global.org_id);
          formdata.append('title', values.title);
          formdata.append('short_description', values.shortDescription);
          formdata.append('description', values.description);
          formdata.append('email', values.email);
          formdata.append('phone', values.phoneNumber);
          formdata.append('address', values.address);
          formdata.append('department_name', values.departmentname);
          // formdata.append('longitude', values.lat);
          // formdata.append('latitude', values.long);
          formdata.append('image', {
            uri: image.uri,
            type: image.type,
            name: image.fileName,
          });
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
          };
          fetch(APIS.UpdateOrganization, requestOptions)
            .then(response => response.json())
            .then((res) => {
              console.log(res);
              if (success) {
                if (Platform.OS === 'android') {
                  ToastAndroid.show('Successfully Updated', ToastAndroid.SHORT);
                } else {
                  alert('Successfully Updated');
                }
                navigation.navigate('parentscreen');
              } else {
                if (Platform.OS === 'android') {
                  ToastAndroid.show('Something Went Wrong', ToastAndroid.SHORT);
                } else {
                  alert('Something Went Wrong');
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
        <View style={{width: width, flex: 1}}>
          <Header Text="Organization Detail" />
          <ScrollView>
            <View
              style={{
                position: 'relative',
                flex: 1,
              }}>
              {!image ? (
                <Image
                  source={require('../../../Assets/profile_image.png')}
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
                <C_TextInput
                  onChangeText={handleChange('title')}
                  value={values.title}
                  onBlur={() => setFieldTouched('title')}
                  style={styles.inputStyl}
                  placeholder="Title"
                  placeholderTextColor="#444444"
                />

                {touched.title && errors.title && (
                  <Text style={styles.validationerror}>{errors.title}</Text>
                )}

                <C_TextInput
                  onChangeText={handleChange('departmentname')}
                  value={values.departmentname}
                  // onBlur={() => setFieldTouched('departmentname')}
                  style={styles.inputStyl}
                  placeholder="Department Name"
                  placeholderTextColor="#444444"
                />
                {touched.departmentname && errors.departmentname && (
                  <Text style={styles.validationerror}>{errors.title}</Text>
                )}
                <C_TextInput
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onBlur={() => setFieldTouched('email')}
                  style={styles.inputStyl}
                  placeholder="Email Address"
                  placeholderTextColor="#444444"
                />

                {touched.email && errors.email && (
                  <Text style={styles.validationerror}>{errors.email}</Text>
                )}

                <C_TextInput
                  onChangeText={handleChange('address')}
                  value={values.address}
                  onBlur={() => setFieldTouched('address')}
                  style={styles.inputStyl}
                  placeholder="Address"
                  placeholderTextColor="#444444"
                />

                {touched.address && errors.address && (
                  <Text style={styles.validationerror}>{errors.address}</Text>
                )}
                {/* <View style={styles.phoneContent}>
                <CountryCodeBorder />
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
              </View> */}

                <C_TextInput
                  onChangeText={handleChange('phoneNumber')}
                  value={values.phoneNumber}
                  onBlur={() => setFieldTouched('phoneNumber')}
                  style={styles.inputStyl}
                  placeholder="Contact Number"
                  placeholderTextColor="#444444"
                />

                {touched.phoneNumber && errors.phoneNumber && (
                  <Text style={styles.validationerror}>
                    {errors.phoneNumber}
                  </Text>
                )}
                <C_TextInput
                  multiline={true}
                  onChangeText={handleChange('shortDescription')}
                  value={values.shortDescription}
                  onBlur={() => setFieldTouched('shortDescription')}
                  style={styles.inputStyl}
                  placeholder="Short Description"
                  placeholderTextColor="#444444"
                />
                {touched.shortDescription && errors.shortDescription && (
                  <Text style={styles.validationerror}>
                    {errors.shortDescription}
                  </Text>
                )}
                <C_TextInput
                  multiline={true}
                  onChangeText={handleChange('description')}
                  value={values.description}
                  onBlur={() => setFieldTouched('description')}
                  style={styles.inputStyl}
                  placeholder=" Description"
                  placeholderTextColor="#444444"
                />
                {touched.description && errors.description && (
                  <Text style={styles.validationerror}>
                    {errors.description}
                  </Text>
                )}

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

                        console.log('Location....... Called.......', position);
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
                {/* {touched.long && errors.long && (
                  <Text
                    style={{color: 'red', fontSize: 12, alignSelf: 'center'}}>
                    {errors.long}
                  </Text>
                )} */}
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

export default AddOrgnaization;

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
    marginTop: 17,
    width: '50%',
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.btnColor,
    alignSelf: 'center',
    bottom: 0,
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
    borderWidth: 1,
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
  validationerror: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 1,
    marginTop: -4,
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
});

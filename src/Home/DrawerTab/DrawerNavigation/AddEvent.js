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
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

import color from '../../../Assets/colors/colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
//import {Checkbox} from 'native-base';
import CountryCodeBorder from '../../../Component/CountryCodeBorder';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../../../Component/Header';
import {Formik} from 'formik';
import * as yup from 'yup';
const {width} = Dimensions.get('window');

import {launchImageLibrary} from 'react-native-image-picker';
import C_TextInput from '../../../Component/input/input';
import DatePicker from 'react-native-date-picker';
import DatePicker2 from 'react-native-date-picker';
import Geolocation from 'react-native-geolocation-service';
import {APIS} from '../../../Apiurls/Apis';
import StartTimeDropDownPicker from '../../../Component/input/StartTimeDropDownPicker';
import EndTimeDropDown from '../../../Component/input/EndTimeDropDown';
import {RadioButton} from 'react-native-paper';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GenderSelectDropdown from '../../../Component/input/GenderDropDown';

const SignupValidationSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required(' Enter Organization Title'),
  startTime: yup.string().required(' Enter Start  Time'),

  description: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Enter Description'),
  address: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Enter Address'),
  endTime: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Enter End Time'),
  shortDescription: yup
    .string()
    .min(3, 'Too Short')
    .max(500, 'Too Long')
    .required('Enter  Description'),
  // Gender: yup
  //   .string()
  //   .min(1, 'Please select gender')
  //   .required('Gender is required'),

  Typeofevent: yup
    .string()
    .min(1, 'Please select event type')
    .required('Event type is required'),

  Requirements: yup
    .string()
    .min(1, 'Please select Requirements')
    .required('Requirements are required'),
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
const AddEvent = ({navigation}) => {
  let profile_Image = null;
  const [image, setImage] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [error, setError] = useState('');
  const [dateevent, setEventdate] = useState('');
  const [dateevent2, setEventdate2] = useState('');

  const [dateendevent, setendEventdate] = useState('');
  const minDate = new Date().toISOString().split('T')[0];

  // CurrentlyWorkingOnthis
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [OpenedEndDate, setOpenEndDate] = useState(false);

  const [Gender, setGender] = useState('1');
  console.log('selectgender', Gender);

  //=============  ALL ABOUT DYNAMIC INPUT ============

  const [roles, setRoles] = useState([{value: '', error: false}]);

  const addInput = () => {
    setRoles(prevRoles => [...prevRoles, {value: '', error: false}]);
  };

  const validateRoles = () => {
    let isValid = true;
    const updatedRoles = roles.map(role => {
      if (role.value.trim() === '') {
        isValid = false;
        return {...role, error: true};
      } else {
        return {...role, error: false};
      }
    });
    setRoles(updatedRoles);
    return isValid;
  };

  const removeInput = number => {
    // remove from the array by index value
    refInputs.current.splice(i, 1)[0];
    // decrease the number of inputs
    setNumInputs(value => value - 1);
  };

  const handleDelete = indexToDelete => {
    const updatedRoles = roles.filter((role, index) => index !== indexToDelete);
    setRoles(updatedRoles);
  };

  // =========================================================

  //console.log(minDate);
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
    //console.log(result);

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
  //console.log(date);
  const handleStartTimeChange = value => {
    setStartTime(value);
    if (value && endTime && value >= endTime) {
      setError('Start time must be less than end time');
    } else {
      setError('');
    }
  };

  const handleEndTimeChange = value => {
    setEndTime(value);
    if (value && startTime && startTime >= value) {
      setError('End time must be greater than start time');
    } else {
      setError('');
    }
  };
  if (dateevent <= minDate) {
    //console.log('Min date');
  } else {
    //console.log('Max date');
  }
  return (
    <Formik
      initialValues={{
        title: '',
        startTime: '',
        endTime: '',
        // lat: '',
        // long: '',
        shortDescription: '',
        description: '',
        address: '',
        requireno: '',
        pocname: '',
        phnumber: '',
        emailaddress: '',
        startDate: '',
        EndDate: '',
        Requirements: '',
        Typeofevent: '',
        Gender: '',
        // roles: [''],
      }}
      onSubmit={values => {
        //console.log(Gender);
        //console.log('User id: ', global.userid);

        // console.log(startDate, EndDate);//
        // if (startTime && endTime && endTime === startTime) {
        //   if (Platform.OS === 'android') {
        //     ToastAndroid.show(
        //       ' Time must be greater than End Time',
        //       ToastAndroid.SHORT,
        //     );
        //   } else {
        //     alert('Start Time must be greater than End Time');
        //   }
        // } else {
        if (image) {
          if (validateRoles()) {
            var myHeaders = new Headers();
            myHeaders.append(
              'Cookie',
              'PHPSESSID=e8dc1269cf42c7a86d6d79aa1eddd937',
            );
            var formdata = new FormData();
            formdata.append('user_id', global.userid);
            formdata.append('org_id', global.org_id);
            formdata.append('title', values.title);
            formdata.append('slug', 'Child Labour');
            formdata.append('short_description', values.shortDescription);
            formdata.append('description', values.description);
            formdata.append('address', values.address);
            //formdata.append('longitude', values.lat);
            // formdata.append('latitude', values.long);
            // formdata.append('event_end_date', values.dateevent2);
            formdata.append('event_date', dateevent);
            formdata.append('type_of_events', values.Typeofevent);
            formdata.append('gender', Gender);
            formdata.append(
              'role',
              roles.map(role => role.value),
            );
            formdata.append('event_end_date', values.EndDate);
            formdata.append('requirements', values.Requirements);
            formdata.append('start_time', values.startTime);
            formdata.append('end_time', values.endTime);
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
            fetch(APIS.AddEvent, requestOptions)
              .then(response => response.json())
              .then(r => {
                console.log(r, 'errro');
                if (r.success === 'Event Added Successfully.') {
                  if (Platform.OS === 'android') {
                    ToastAndroid.show('Add Successfully', ToastAndroid.SHORT);
                    navigation.goBack();
                  } else {
                    alert('Add Successfully');
                    navigation.goBack();
                  }
                } else {
                  if (Platform.OS === 'android') {
                    ToastAndroid.show(`${r.error}`, ToastAndroid.LONG);
                  } else {
                    alert('Something Went Wrong');
                  }
                }
              })
              .catch(error => console.log('error', error));
          } else {
            if (Platform.OS === 'android') {
              ToastAndroid.show(
                'Validation failed. Please fill all role fields.',
                ToastAndroid.SHORT,
              );
            } else {
              alert('Validation failed. Please fill all role fields.');
            }
          }
        } else {
          if (Platform.OS === 'android') {
            if (image === '') {
              ToastAndroid.show('Choose Image', ToastAndroid.SHORT);
            }
          } else {
            alert('Choose Image');
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
          <Header Text="Add Event" />
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
                  placeholder="New Event"
                  placeholderTextColor="#444444"
                />

                {touched.title && errors.title && (
                  <Text style={styles.validationerror}>{errors.title}</Text>
                )}

                {/*  ================ This Date Select ================ */}
                {/* REFERENCE 2 */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}>
                  <View style={styles.DateInnerContainer}>
                    <View>
                      <TouchableOpacity
                        onPress={() => setOpen(true)}
                        style={{
                          marginLeft: 10,
                          height: 50,
                          backgroundColor: color.white,
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          flexDirection: 'row',
                          borderRadius: 4,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: color.black,
                            paddingStart: 5,
                          }}>
                          Start Date:
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{fontSize: 13, color: color.black, marginLeft: 6}}>
                      {dateevent && dateevent}
                    </Text>
                  </View>

                  {touched.dateevent && errors.dateevent && (
                    <Text style={styles.validationerror}>
                      {errors.dateevent}
                    </Text>
                  )}

                  {/* <View style={styles.DateInnerContainer}>
                    <View>
                      <TouchableOpacity
                        onPress={() => setOpenEndDate(true)}
                        style={{
                          marginLeft: 10,
                          height: 50,
                          backgroundColor: color.white,
                          justifyContent: 'space-around',
                          alignItems: 'center',

                          flexDirection: 'row',
                          borderRadius: 4,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: color.black,
                            paddingStart: 5,
                          }}>
                          End Date:
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{fontSize: 13, color: color.black, marginLeft: 6}}>
                      {dateevent2 && dateevent2}
                    </Text>
                  </View> */}

                  <View style={styles.inputContent}>
                    <StartTimeDropDownPicker
                      defaultButtonText={'Start Time'}
                      onSelect={(selectedItem, index) => {
                        //console.log(selectedItem);
                        handleStartTimeChange(selectedItem);
                        setFieldValue('startTime', selectedItem);
                      }}
                    />
                  </View>
                </View>

                {/* =================== Start and End Time ==================*/}
                <View style={styles.inputContainer}>
                  <View style={styles.DateInnerContainer}>
                    <View>
                      <TouchableOpacity
                        onPress={() => setOpenEndDate(true)}
                        style={{
                          marginLeft: 10,
                          height: 50,
                          backgroundColor: color.white,
                          justifyContent: 'space-around',
                          alignItems: 'center',

                          flexDirection: 'row',
                          borderRadius: 4,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: color.black,
                            paddingStart: 5,
                          }}>
                          End Date:
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{fontSize: 13, color: color.black, marginLeft: 6}}>
                      {dateevent2 && dateevent2}
                    </Text>
                  </View>

                  {/* <View style={styles.inputContent}>
                    <StartTimeDropDownPicker
                      defaultButtonText={'Start Time'}
                      onSelect={(selectedItem, index) => {
                        //console.log(selectedItem);
                        handleStartTimeChange(selectedItem);
                        setFieldValue('startTime', selectedItem);
                      }}
                    />
                  </View> */}

                  <View style={styles.inputContent}>
                    <EndTimeDropDown
                      defaultButtonText={'End Time'}
                      onSelect={(selectedItem, index) => {
                        handleEndTimeChange(selectedItem);
                        setFieldValue('endTime', selectedItem);
                      }}
                    />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {touched.startTime && errors.startTime && (
                    <Text style={styles.validationerror}>
                      {errors.startTime}
                    </Text>
                  )}
                  {touched.endTime && errors.endTime && (
                    <Text style={styles.validationerror}>{errors.endTime}</Text>
                  )}
                </View>

                {/* ============== Event Type ============== */}
                <C_TextInput
                  multiline={true}
                  onChangeText={handleChange('Typeofevent')}
                  value={values.Typeofevent}
                  onBlur={() => setFieldTouched('Typeofevent')}
                  style={styles.inputStyl}
                  placeholder="Type of event"
                  placeholderTextColor="#444444"
                />

                {touched.Typeofevent && errors.Typeofevent && (
                  <Text style={styles.validationerror}>
                    {errors.Typeofevent}
                  </Text>
                )}

                {/* ============== Requirements ============== */}
                <C_TextInput
                  multiline={true}
                  onChangeText={handleChange('Requirements')}
                  value={values.Requirements}
                  onBlur={() => setFieldTouched('Requirements')}
                  style={styles.inputStyl}
                  placeholder="Requirements"
                  placeholderTextColor="#444444"
                />

                {touched.Requirements && errors.Requirements && (
                  <Text style={styles.validationerror}>
                    {errors.Requirements}
                  </Text>
                )}

                {/* ============ Gender Radio Button =========== */}

                {/* <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <RadioButton.Group
                    onValueChange={value => {
                      setFieldValue('Gender', value), setGender(value);
                    }}
                    value={Gender}>
                    <View style={{flexDirection: 'row', marginLeft: 10}}>
                      <View style={styles.RadioButtonStyle}>
                        <RadioButton value="1" />
                        <Text>Male</Text>
                      </View>

                      <View style={styles.RadioButtonStyle}>
                        <RadioButton value="0" />
                        <Text>Female</Text>
                      </View>
                    </View>
                  </RadioButton.Group>
                </View> */}

                <View>
                  <GenderSelectDropdown
                    defaultButtonText="Select Gender"
                    onSelect={value => {
                      setFieldValue('Gender', value), setGender(value);
                    }}
                    value={Gender}
                  />
                </View>

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

                <C_TextInput
                  multiline={true}
                  onChangeText={handleChange('address')}
                  value={values.address}
                  onBlur={() => setFieldTouched('address')}
                  style={styles.inputStyl}
                  placeholder=" Address"
                  placeholderTextColor="#444444"
                />
                {touched.address && errors.address && (
                  <Text style={styles.validationerror}>{errors.address}</Text>
                )}

                {/* ======================== Add Role =============== */}

                <View>
                  {roles.map((role, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <C_TextInput
                        onChangeText={value => {
                          const updatedRoles = [...roles];
                          updatedRoles[index].value = value;
                          setRoles(updatedRoles);
                        }}
                        value={role.value}
                        style={styles.inputStyl}
                        placeholder="Enter Role"
                        placeholderTextColor="#444444"
                      />

                      {index !== 0 && ( // Add delete button for all roles except the first one
                        <TouchableOpacity
                          onPress={() => handleDelete(index)}
                          style={{
                            position: 'absolute',
                            marginLeft: '91%',
                          }}>
                          <Image
                            style={{
                              height: 20,
                              width: 20,
                              tintColor: 'red',
                            }}
                            resizeMode="cover"
                            source={require('../../../Assets/deleteIcon.png')}></Image>
                        </TouchableOpacity>
                      )}
                    </View>
                  ))}
                  {/* {error && (
                    <Text>Validation failed. Please fill all role fields.</Text>
                  )} */}
                  <C_TextInput
                    multiline={true}
                    onChangeText={handleChange('requireno')}
                    value={values.requireno}
                    onBlur={() => setFieldTouched('requireno')}
                    style={styles.inputStyl}
                    placeholder=" Require No.of Volunteers"
                    placeholderTextColor="#444444"
                  />
                  {touched.requireno && errors.requireno && (
                    <Text style={styles.validationerror}>{errors.requireno}</Text>
                  )}
                  <C_TextInput
                    multiline={true}
                    onChangeText={handleChange('pocname')}
                    value={values.pocname}
                    onBlur={() => setFieldTouched('pocname')}
                    style={styles.inputStyl}
                    placeholder=" POC Name"
                    placeholderTextColor="#444444"
                  />
                  {touched.pocname && errors.pocname && (
                    <Text style={styles.validationerror}>{errors.pocname}</Text>
                  )}

                  <C_TextInput
                    multiline={true}
                    onChangeText={handleChange('phnumber')}
                    value={values.phnumber}
                    onBlur={() => setFieldTouched('phnumber')}
                    style={styles.inputStyl}
                    placeholder="Phone Number"
                    placeholderTextColor="#444444"
                  />
                  {touched.phnumber && errors.phnumber && (
                    <Text style={styles.validationerror}>{errors.phnumber}</Text>
                  )}

                  <C_TextInput
                    multiline={true}
                    onChangeText={handleChange('emailaddress')}
                    value={values.emailaddress}
                    onBlur={() => setFieldTouched('emailaddress')}
                    style={styles.inputStyl}
                    placeholder="Email Address"
                    placeholderTextColor="#444444"
                  />
                  {touched.emailaddress && errors.emailaddress && (
                    <Text style={styles.validationerror}>{errors.emailaddress}</Text>
                  )}

                  <TouchableOpacity onPress={addInput} style={styles.addButton}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'left',
                      }}>
                      + Add a new Role
                    </Text>
                  </TouchableOpacity>
                </View>

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
                  <Text
                    style={{color: 'red', fontSize: 12, alignSelf: 'center'}}>
                    {errors.long}
                  </Text>
                )}

                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={handleSubmit}>
                  <Text style={styles.loginText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);

                var year = date.getFullYear();
                var month = (date.getMonth() + 1).toString().padStart(2, '0');
                var day = date.getDate().toString().padStart(2, '0');

                var formattedDate = year + '-' + month + '-' + day;

                //console.log(formattedDate);
                //Ref
                setEventdate(formattedDate);
                setFieldValue('startDate', formattedDate);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <DatePicker2
              modal
              mode="date"
              open={OpenedEndDate}
              date={date}
              onConfirm={date => {
                setOpenEndDate(false);

                var year = date.getFullYear();
                var month = (date.getMonth() + 1).toString().padStart(2, '0');
                var day = date.getDate().toString().padStart(2, '0');
                var formattedDate = year + '-' + month + '-' + day;

                //console.log(formattedDate);
                setEventdate2(formattedDate);
                setFieldValue('EndDate', formattedDate);
              }}
              onCancel={() => {
                setOpenEndDate(false);
              }}
            />
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

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
    bottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },

  RadioButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
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

  DateInnerContainer: {
    flexDirection: 'row',
    height: 50,
    width: '48%',
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: color.white,
    alignItems: 'center',
  },
});

export default AddEvent;

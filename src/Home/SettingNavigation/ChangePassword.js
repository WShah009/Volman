import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import Rigthiconinput from '../../Component/Rigthiconinput';
import Header from '../../Component/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import color from '../../Assets/colors/colors';
import {Formik} from 'formik';
import * as yup from 'yup';
import {APIS} from '../../Apiurls/Apis';
const {width, height} = Dimensions.get('window');

const ValidationSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password Must Contain atleast 8 Character one is Uppercase letter and one is lowercase letter one number',
    ),
  confirmPassword: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password Must Contain atleast 8 Character one is Uppercase letter and one is lowercase letter one number',
    ),
  newconfirmPassword: yup
    .string()
    .min(8)
    .oneOf([yup.ref('confirmPassword')], 'Your Password do not matched')
    .required('Confirm Password is required'),
});
const ChangePassword = ({navigation}) => {
  const [isVisible1, setisVisible1] = React.useState(false);
  const [isVisible, setisVisible] = React.useState(false);
  const [isVisible2, setisVisible2] = React.useState(false);
  const [Password, setConfirmnewPassword] = React.useState('');
  const [current, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  return (
    <Formik
      initialValues={{
        currentPassword: '',
        confirmPassword: '',
        newconfirmPassword: '',
      }}
      onSubmit={values => {
        console.log(values);
        var myHeaders = new Headers();
        myHeaders.append(
          'Cookie',
          'PHPSESSID=9e2f0144c7a23a4ff1ce8faa8b2adf07',
        );

        var formdata = new FormData();
        formdata.append('id', global.userid);
        formdata.append('password', values.confirmPassword);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow',
        };

        fetch(APIS.changePassword, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result);

            if (result.success === 'Password Changed Successfully') {
              if (Platform.OS === 'android') {
                ToastAndroid.show(
                  'Password Changed Successfully',
                  ToastAndroid.SHORT,
                );
                navigation.goBack();
              } else {
                alert('Password Changed Successfully');
                navigation.goBack();
              }
              navigation.goBack();
            } else {
              if (Platform.OS === 'android') {
                ToastAndroid.show('Some Thing Went Wrong', ToastAndroid.SHORT);
              } else {
                alert('Some Thing Went Wrong');
              }
            }
          })
          .catch(error => console.log('error', error));
      }}
      validationSchema={ValidationSchema}>
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
        <View style={{width: width, backgroundColor: 'white', height: height}}>
          <Header Text="Change Password" />
          <View style={{marginLeft: 20, marginRight: 20, marginTop: 25}}>
            <View style={{width: '100%'}}>
              <View style={styles.Inputboxcontainer}>
                <TextInput
                  placeholder="Current Password"
                  value={values.currentPassword}
                  onBlur={() => setFieldTouched('currentPassword')}
                  onChangeText={handleChange('currentPassword')}
                  secureTextEntry={isVisible ? false : true}
                  style={{fontSize: 15, marginHorizontal: 10, flex: 1}}
                />
                <TouchableOpacity
                  onPress={() => {
                    setisVisible(!isVisible);
                  }}>
                  <Icon3
                    name={isVisible ? 'eye-with-line' : 'eye'}
                    size={25}
                    color={color.gray}></Icon3>
                </TouchableOpacity>
              </View>
              {touched.currentPassword && errors.currentPassword && (
                <Text style={{color: 'red', fontSize: 12, marginLeft: 20}}>
                  {errors.currentPassword}
                </Text>
              )}
              <View style={styles.Inputboxcontainer}>
                <TextInput
                  secureTextEntry={isVisible1 ? false : true}
                  placeholder="New Password"
                  value={values.confirmPassword}
                  onBlur={() => setFieldTouched('confirmPassword')}
                  onChangeText={handleChange('confirmPassword')}
                  style={{fontSize: 15, marginHorizontal: 10, flex: 1}}
                />

                <TouchableOpacity
                  onPress={() => {
                    setisVisible1(!isVisible1);
                  }}>
                  <Icon3
                    name={isVisible1 ? 'eye-with-line' : 'eye'}
                    size={25}
                    color={color.gray}></Icon3>
                </TouchableOpacity>
              </View>
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={{color: 'red', fontSize: 12, marginLeft: 20}}>
                  {errors.confirmPassword}
                </Text>
              )}
              <View style={styles.Inputboxcontainer}>
                <TextInput
                  secureTextEntry={isVisible2 ? false : true}
                  placeholder="Confirm New Password"
                  value={values.newconfirmPassword}
                  onBlur={() => setFieldTouched('newconfirmPassword')}
                  onChangeText={handleChange('newconfirmPassword')}
                  style={{fontSize: 15, marginHorizontal: 10, flex: 1}}
                />

                <TouchableOpacity
                  onPress={() => {
                    setisVisible2(!isVisible2);
                  }}>
                  <Icon3
                    name={isVisible2 ? 'eye-with-line' : 'eye'}
                    size={25}
                    color={color.gray}></Icon3>
                </TouchableOpacity>
              </View>
              {touched.newconfirmPassword && errors.newconfirmPassword && (
                <Text style={{color: 'red', fontSize: 12, marginLeft: 20}}>
                  {errors.newconfirmPassword}
                </Text>
              )}
              <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
                <Text style={styles.loginText}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,

    backgroundColor: '#FFFFF0',
    elevation: 3,
  },
  Inputboxcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    
    margin: 10,
    borderRadius: 8,
    borderColor: color.white,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    elevation:5
  },
  header: {
    backgroundColor: '#0080ff',
    height: 60,

    flexDirection: 'row',
    borderColor: 'green',
    borderWidth: 1,
  },
  headertext: {
    fontSize: 30,
    marginLeft: 100,
    color: 'white',
    width: '80%',
    marginTop: 4,
  },
  loginBtn: {
    marginTop: 25,
    width: '45%',
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
});

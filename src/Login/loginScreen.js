import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import C_TextInput from '../Component/input/input';
import PasswordInput from '../Component/input/passwordInput';
import normalize from 'react-native-normalize';
const {height, width} = Dimensions.get('screen');
import color from '../Assets/colors/colors';
import {APIS} from '../Apiurls/Apis';
import CheckInternet from '../CheckInternet/CheckInternet';
import {useSelector, useDispatch} from 'react-redux';
import {setUserimage} from '../Redux/Actions/actions';
import {_signInwithGoogle} from '../Config/FireBase/GoogleLogin';
import {auth} from '../Config/firebase.config';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {colors} from 'react-native-elements';
import OrgorVolDropDown from '../Component/input/OrgorVolDropdown';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import {result} from 'lodash';
import TabNavigate from '../Navigation/Tabnavigate';

const LoginScreen = () => {
  //not usefull
  // async function googleSignIn() {
  //   _signInwithGoogle().then(data => {
  //     if (!data) {
  //       console.log('=>Error:', 'No Data');
  //       return;
  //     }
  //     console.log('=>Success', data);
  //   });
  // }

  const fbLogin = resCallback => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      resutlt => {
        console.log('rb result==', resutlt);
        if (
          resutlt.declinedPermissions &&
          resutlt.declinedPermissions.includes('email')
        ) {
          resCallback({message: 'Email is required'});
        }
        if (resutlt.isCancelled) {
          console.log('error');
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=email,name,picture',
            null,
            resCallback,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        console.log('Login failed with error:' + error);
      },
    );
  };

  const onFbLogin = async () => {
    try {
      await fbLogin(_responsInfoCallback);
    } catch (error) {
      console.log('error raised', error);
    }
  };

  const _responsInfoCallback = async (error, result) => {
    if (error) {
      console.log('error top', error);
      return;
    } else {
      const userData = result;
      console.log('fb data+++', userData);
    }
  };

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userinfo = await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      //console.log(userinfo);
      console.log('User Info:', userinfo);
      console.log('Access Token:', tokens.accessToken);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Alert.alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const navigation = useNavigation();
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [isVisible, setisVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [user_type, setusertype] = useState();

  const handleDropdownSelect = (selectedValue, index) => {
    // Handle the selected value as needed
    setSelectedOption(selectedValue);

    // Map the selected value to the corresponding user_type
    const userTypeValue = selectedValue === 'Organization' ? 1 : 0;

    // Update the user_type state
    setusertype(userTypeValue);
  };

  const dispatch = useDispatch();
  const Login = () => {
    var myHeaders = new Headers();
    //myHeaders.append('Cookie', 'PHPSESSID=d9d0a92bd3f1af1b17b861750a812f4f');

    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);
    formdata.append('user_type', user_type);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      //redireformdata,

      redirect: 'follow',
    };

    fetch(APIS.login, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result, 'login result');
        global.userid = result.id;
        global.Firstname = result.first_name;
        global.phone = result.phone;
        global.building_number = result.building_number;
        global.email = result.email;
        dispatch(setUserimage(result.image));
        global.street_name = result.street_name;
        global.city = result.city;
        global.LastName = result.last_name;
        global.district_name = result.district_name;
        // global.gender = result.gender;
        global.usertype = result.user_type;
        global.org_id = result.Organization_ID;
        global.orgaddress = result.orgDetailcity;
        global.orgdepartment_name = result.orgDetailDepartName;
        global.orgdescription = result.orgDetailDescription;
        global.orgemail = result.orgDetailEmail;
        global.orgimage = result.orgDetailImage;
        global.orgphone = result.orgDetailPhone;
        global.orgshort_description = result.orgDetailShortDepart;
        global.orgtitle = result.orgDetailTitle;
        global.orglongitude = result.orgDetaillongitude;
        global.orglatitude = result.orgDetaillatitude;
        global.zip_code = result.zip_code;

        const userTypeValue = selectedOption === 'Organization' ? 1 : 0;

        //   if (userTypeValue === 0) {
        //     console.log('yes Volunteers found');

        //    // navigation.navigate('parentscreen');
        //   <TabNavigate/>
        //   } else if (userTypeValue === 1) {
        //     global.userid = result.id;
        //     global.Firstname = result.first_name;
        //     global.phone = result.phone;
        //     global.building_number = result.building_number;
        //     global.email = result.email;
        //     dispatch(setUserimage(result.image));
        //     global.street_name = result.street_name;
        //     global.city = result.city;
        //     global.LastName = result.last_name;
        //     global.district_name = result.district_name;
        //     // global.gender = result.gender;
        //     global.usertype = result.user_type;
        //     global.org_id = result.Organization_ID;
        //     global.orgaddress = result.orgDetailcity;
        //     global.orgdepartment_name = result.orgDetailDepartName;
        //     global.orgdescription = result.orgDetailDescription;
        //     global.orgemail = result.orgDetailEmail;
        //     global.orgimage = result.orgDetailImage;
        //     global.orgphone = result.orgDetailPhone;
        //     global.orgshort_description = result.orgDetailShortDepart;
        //     global.orgtitle = result.orgDetailTitle;
        //     global.orglongitude = result.orgDetaillongitude;
        //     global.orglatitude = result.orgDetaillatitude;
        //     global.zip_code = result.zip_code;
        //     navigation.navigate('parentscreen');

        //     console.log('Organ  found');

        // }else {
        //     console.log('note found');
        //   }

        //   if (result?.success === 'Successfully logged in.') {
        //     if (result.user_type === '0') {
        //       if (userTypeValue === 0) {
        //             console.log('yes Volunteers found');
        //       }
        //       navigation.navigate('parentscreen');
        //     } else {
        //       if (
        //         result.orgDetailAddress === null ||
        //         result.orgDetailAddress === '' ||
        //         result.orgDetailEmail === null ||
        //         result.orgDetailEmail === ''
        //       ) {
        //         navigation.navigate('addorganization');
        //       } else {
        //         navigation.navigate('parentscreen');
        //         //  navigation.navigate('OrgDashboard');
        //       }
        //     }
        //   } else {
        //     console.log(JSON.stringify(result?.success));
        //     alert(result?.error);
        //   }
        // })

        console.log('ijijijijijijijijij');

        if (result?.success === 'Successfully logged in.') {
          if (result.user_type === '0') {
            console.log('oooooo');
            if (userTypeValue === 0) {
              console.log('volunteer');
              navigation.navigate('parentscreen');
            }
            navigation.navigate('parentscreen');
          } else {
            console.log('oraganiztion');
            navigation.navigate('parentscreen');
            //  navigation.navigate('OrgDashboard');
          }
        } else {
          console.log(JSON.stringify(result?.success));
          alert(result?.error);
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../Assets/Mask.png')}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <ScrollView style={styles.contentStyle}>
          <View style={styles.logoStyle}>
            <Image
              style={styles.logoImg}
              source={require('./../Assets/Final.png')}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 15,
            }}>
            <Text style={{color: color.purple, fontSize: 18}}>
              Select the option to login as a
            </Text>
            <Text style={{color: color.purple, fontSize: 18}}>
              Organization or Volunteer
            </Text>
          </View>
          <OrgorVolDropDown
            defaultButtonText={selectedOption}
            onSelect={handleDropdownSelect}
            onChangeText={u => setusertype(u)}
          />

          <View style={styles.inputContainer}>
            <C_TextInput
              icon={'email'}
              placeholder="Email"
              placeholderTextColor="#444444"
              onChangeText={e => setEmail(e)}
              style={{paddingHorizontal: 12}}
            />
          </View>

          <View style={styles.inputContainer}>
            <PasswordInput
              placeholder="Password"
              nameicon={'vpn-key'}
              placeholderTextColor="#444444"
              secureTextEntry={isVisible ? false : true}
              onChangeText={p => setPassword(p)}
              name={isVisible ? 'eye-off' : 'eye'}
              onPress={() => {
                setisVisible(!isVisible);
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={styles.forgotStyle}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                Login();
              }}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.orLoginCont}>
            <Text style={styles.orLoginStyle}>----or login with----</Text>
          </View>
          <View style={styles.iconContainer}>
            {/* <FontAwesome name="google" size={35} color="#444444" /> */}
            <TouchableOpacity
              onPress={() => {
                //googleSignIn();
                _signIn();
              }}>
              <Image
                style={styles.googleImg}
                source={require('./../Assets/google.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                //googleSignIn();
                onFbLogin();
              }}>
              <Icon name="facebook" size={50} color="#05096e" />
            </TouchableOpacity>
          </View>
          <View style={styles.accStyle}>
            <Text style={styles.haveAcc}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Option');
              }}>
              <Text style={styles.registerNow}> Register now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* <CheckInternet
          isConnected={isConnected}
          setIsConnected={setIsConnected}
        /> */}
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  backgroundImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoStyle: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginVertical: 40,
  },
  logoImg: {
    width: '35%',
    height: normalize(180),
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  forgotStyle: {
    width: '100%',
    textAlign: 'right',
    color: color.default,
    fontSize: 14,
    marginTop: 7,
  },
  contentStyle: {
    width: '90%',
  },
  loginBtn: {
    paddingHorizontal: 20,
    backgroundColor: color.purple,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '50%',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.white,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  orLoginCont: {
    marginVertical: 20,
  },
  orLoginStyle: {
    width: '100%',
    textAlign: 'center',
    color: '#646464',
    fontSize: 18,
  },
  accStyle: {
    fontSize: 20,
    color: color.default,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  registerNow: {
    fontSize: 15,
    color: color.purple,
    textDecorationColor: color.purple,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  iconContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },
  haveAcc: {
    color: color.default,
    fontSize: 15,
  },
  googleImg: {
    height: normalize(43),
    width: normalize(43),
    marginRight: 15,
  },
});

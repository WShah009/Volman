import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';
import React from 'react';
import Header from '../../Component/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../Assets/colors/colors';
import Antdesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
//import {TouchableOpacity} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');
const Settings = ({navigation}) => {
  const [toggleon, setToggleon] = React.useState(false);
  const isfocused = useIsFocused();
  const createTwoButtonAlert = () =>
    Alert.alert('Delete Account?', 'Are you sure to delete your account ', [
      {
        text: 'Yes',
        onPress: () => {
          DeleteAccount();
        },
        style: 'cancel',
      },
      {text: 'No', onPress: () => console.log('No Pressed')},
    ]);
  const toggleNotification = () => {
    setToggleon(!toggleon);
  };
  const DeleteAccount = () => {
    var formdata = new FormData();
    formdata.append('id', global.userid);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };

    fetch('https://assanhissab.com/volman/delete-account.php', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.message);
        if (result.message === 'Your Account has been deleted successfully.') {
          if (Platform.OS === 'android') {
            ToastAndroid.show('Account Deleted', ToastAndroid.SHORT);
            navigation.navigate('LoginScreen');
          } else {
            alert('Account Deleted');
            navigation.navigate('LoginScreen');
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
  };

  return (
    <View style={styles.mainConatiner}>
      <Header Text="Setting" />
      <View style={styles.Account}>
        <Icon
          name="person"
          size={21}
          color={color.btnColor}
          style={{marginVertical: '0.5%'}}
        />
        <Text style={styles.AccountText}>Account</Text>
      </View>
      <Text style={{color: 'gainsboro'}}>
        ______________________________________________________
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('editProfile');
        }}>
        <Text style={styles.buttonText}>Edit Profile</Text>

        <Antdesign
          name="right"
          size={17}
          color={color.gray}
          style={{marginRight: '6%'}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('changepassword');
        }}>
        <Text style={styles.buttonText}>Change Password</Text>

        <Antdesign
          name="right"
          size={17}
          color={color.gray}
          style={{marginRight: '6%'}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={createTwoButtonAlert}>
        <Text style={styles.buttonText}>Delete Account</Text>

        <Antdesign
          name="right"
          size={17}
          color={color.gray}
          style={{marginRight: '6%'}}
        />
      </TouchableOpacity>

      <View style={styles.Notification}>
        <MaterialIcons
          name="privacy-tip"
          size={21}
          color={color.btnColor}
          style={{marginVertical: '0.5%'}}
        />
        <Text style={styles.AccountText}>Rules</Text>
      </View>
      <Text style={{color: 'gainsboro'}}>
        ______________________________________________________
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('privacypolicy');
        }}>
        <Text style={styles.buttonText}>Privacy Policy</Text>

        <Antdesign
          name="right"
          size={17}
          color={color.gray}
          style={{marginRight: '6%'}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('termsandcondtion');
        }}>
        <Text style={styles.buttonText}>Terms & Conditions</Text>

        <Antdesign
          name="right"
          size={17}
          color={color.gray}
          style={{marginRight: '6%'}}
        />
      </TouchableOpacity>

      <View style={styles.Notification}>
        <Icon
          name="notifications"
          size={21}
          color={color.btnColor}
          style={{marginVertical: '0.8%'}}
        />
        <Text style={styles.AccountText}>Notification</Text>
      </View>
      <Text style={{color: 'gainsboro'}}>
        ______________________________________________________
      </Text>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Notification</Text>
        <TouchableOpacity
          onPress={() => {
            toggleNotification();
          }}>
          <FontAwesome5
            name={toggleon === true ? 'toggle-on' : 'toggle-off'}
            size={24}
            color={toggleon === true ? color.btnColor : color.gray}
            style={{marginRight: '6%'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    width: width,
  },
  Account: {
    flexDirection: 'row',

    marginTop: 24,
    marginLeft: 30,
  },
  Notification: {
    flexDirection: 'row',

    marginTop: 34,
    marginLeft: 30,
  },
  AccountText: {
    fontSize: 19,
    fontWeight: 'bold',
    marginStart: '3%',

    color: color.btnColor,
  },
  button: {
    flexDirection: 'row',

    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: color.gray,
  },
});

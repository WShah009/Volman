import React from 'react';
import {StyleSheet, Text, View, Alert, Pressable} from 'react-native';
import normalize from 'react-native-normalize';
import PhoneInput from 'react-native-phone-input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../Assets/colors/colors';
import EditProfile from '../Home/SettingNavigation/EditProfile';
import {forwardRef} from 'react';
const CountryCodeBorder = (props, ref) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const phoneInput = React.useRef(null);
  const editprofile = React.useRef();
  const OnPress = () => {
    if (phoneNumber.length !== 0) {
      Alert.alert('Confirm Number', phoneNumber, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },

        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        borderRadius: 6,
        paddingLeft: 5,
       elevation:1,
        borderColor: color.btnColor,
      }}>
      <PhoneInput
        ref={ref}
        defaultValue={phoneNumber}
        containerStyle={styles.phoneContainer}
        initialCountry={props.initialCountry}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={props.onChangeFormattedText}
        textStyle={styles.codeStyle}
        flagStyle={styles.flagImg}
        layout="second"
        withShadow
        autoFocus
        onSelectCountry={props.onSelectCountry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: 6,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: color.btnColor,
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

export default forwardRef(CountryCodeBorder);

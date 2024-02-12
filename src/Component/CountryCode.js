import {values} from 'lodash';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import normalize from 'react-native-normalize';
import PhoneInput from 'react-native-phone-input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../Assets/colors/colors';

const CountryCode = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const phoneInput = React.useRef(null);
  // const [modalVisible, setModalVisible] = useState(false);
  // const [selectedCountry, setSelectedCountry] = useState(null);
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
  let code;
  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        onSelectCountry={values => {
          console.log(values, 'gjhsjhsjh');
        }}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={text => {
          setPhoneNumber(text);
          console.log(text, 'text');
          code = phoneInput.current?.getCountryCode();
          console.log(code, 'onChangeFormattec');
        }}
        onPressConfirm={v => {
          console.log(v);
          code = phoneInput.current?.getCountryCode();
          console.log(code, 'onPress');
        }}
        onChangePhoneNumber={p => {
          console.log(p, 'phno');
          code = phoneInput.current?.getCountryCode();
          console.log(code, 'onchange');
        }}
        textStyle={styles.codeStyle}
        flagStyle={styles.flagImg}
        // defaultCountry="us"
        defaultCode="DM"
        layout="second"
        withShadow
        initialCountry="pk"
        autoFocus
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

export default CountryCode;

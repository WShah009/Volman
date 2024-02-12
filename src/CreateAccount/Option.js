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
  ToastAndroid,
} from 'react-native';
import {Checkbox} from 'native-base';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import color from '../Assets/colors/colors';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectDropdown from 'react-native-select-dropdown';
const Option = props => {
  const navigation = useNavigation();
  const [type, setType] = useState(null);
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
  });
  const selectType = ['Volunteer', 'Organization'];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../Assets/Mask.png')}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <ScrollView style={styles.contentStyle}>
          <Text style={styles.verificationText}>
            Join as a organization member or a volunteer
          </Text>

          <View style={styles.inputView}>
            <SelectDropdown
              defaultButtonText={props.defaultButtonText}
              data={selectType}
              onSelect={(selectedItem, index) => {
                setType(index);
              }}
              buttonStyle={styles.dropdown4BtnStyle}
              buttonTextStyle={styles.dropdown4BtnTxtStyle}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown4DropdownStyle}
              rowStyle={styles.dropdown4RowStyle}
              rowTextStyle={styles.dropdown4RowTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <Icon
                    name={isOpened ? 'arrow-drop-up' : 'arrow-drop-down'}
                    color={color.default}
                    size={18}
                  />
                );
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              if (type === null) {
                if (Platform.OS === 'android') {
                  ToastAndroid.show('Select Type', ToastAndroid.SHORT);
                } else {
                  alert('Select Type');
                }
              } else {
                navigation.navigate('Step1', {
                  usertype: type,
                });
              }
            }}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  verificationText: {
    color: color.btnColor,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
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
  checkboxCont: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  selectstyle: {
    paddingVertical: 13,
    fontSize: 15,
    backgroundColor: color.red,
  },
  inputView: {
    backgroundColor: color.white,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    elevation: 1,
    paddingHorizontal: 5,
    width: '89%',
    alignSelf: 'center',
  },
  dropdown4BtnStyle: {
    width: '100%',
    height: 52,
    backgroundColor: color.white,
    borderRadius: 6,
  },
  dropdown4BtnTxtStyle: {color: color.default, textAlign: 'left', fontSize: 15},
  dropdown4DropdownStyle: {backgroundColor: color.white},
  dropdown4RowStyle: {
    backgroundColor: color.white,
    borderBottomColor: color.default,
  },
  dropdown4RowTxtStyle: {color: color.default, textAlign: 'left'},
});

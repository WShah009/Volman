import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import color from '../../Assets/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import icons from '../../Assets/app_icon/icons';
import normalize from 'react-native-normalize';
import style from 'react-native-date-picker-select/style';
import SelectDropdown from 'react-native-select-dropdown';
import Iconb from 'react-native-vector-icons/FontAwesome5';

const SelectYearDropdown = props => {
  const {mode = 'outlined'} = props;
  const selectYear = [
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
  ];

  return (
    <View style={styles.inputView}>
      {/* <Iconb name="calendar-alt" size={22} color={color.default} /> */}
      <Image source={icons.calender} style={styles.imgStyle} />
      <SelectDropdown
        defaultButtonText={props.defaultButtonText}
        data={selectYear}
        onSelect={props.onSelect}
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
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    height: normalize(18),
    width: normalize(18),
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

export default SelectYearDropdown;

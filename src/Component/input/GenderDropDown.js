import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../Assets/colors/colors';
import SelectDropdown from 'react-native-select-dropdown';

const GenderSelectDropdown = (props) => {
  const genderOptions = ['Male', 'Female']; // Options for gender

  return (
    <View style={styles.inputView}>
     
      <SelectDropdown
        defaultButtonText={props.defaultButtonText}
        data={genderOptions}
        onSelect={props.onSelect}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        dropdownIconPosition="right"
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
        renderDropdownIcon={(isOpened) => (
          <Icon
            name={isOpened ? 'arrow-drop-up' : 'arrow-drop-down'}
            color={color.default}
            size={18}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: color.white,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    elevation: 1,
    paddingHorizontal: 5,
    width: '100%',
  },
  dropdownBtnStyle: {
    width: '100%',
    height: 52,
    backgroundColor: color.white,
    borderRadius: 6,
  },
  dropdownBtnTxtStyle: { color: color.default, textAlign: 'left', fontSize: 15 },
  dropdownDropdownStyle: { backgroundColor: color.white },
  dropdownRowStyle: {
    backgroundColor: color.white,
    borderBottomColor: color.default,
  },
  dropdownRowTxtStyle: { color: color.default, textAlign: 'left' },
});

export default GenderSelectDropdown;

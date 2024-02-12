import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../Assets/colors/colors';
import SelectDropdown from 'react-native-select-dropdown';

const OrgorVolDropDown = (props) => {
  const Options = ['Organization', 'Volunteer']; // Options for login 

  // Find the index of the defaultButtonText in the options array
  const defaultIndex = Options.indexOf(props.defaultButtonText);

  return (
    <View style={styles.inputView}>
     
      <SelectDropdown
        defaultButtonText={props.defaultButtonText}
        data={Options}
        onSelect={props.onSelect}
        defaultIndex={defaultIndex} // Pass the default index
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        dropdownIconPosition="right"
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
        renderDropdownIcon={(isOpened) => (
          <Icon
            name={isOpened ? 'arrow-drop-up' : 'arrow-drop-down'}
            color={color.white}
            size={40}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: color.purple,
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
    backgroundColor: color.purple,
    borderRadius: 6,
  },
  dropdownBtnTxtStyle: { color: color.white, textAlign: 'center', fontSize: 18,fontWeight:'bold' },
  dropdownDropdownStyle: { backgroundColor: color.white },
  dropdownRowStyle: {
    backgroundColor: color.purple,
    borderBottomColor: color.default,
  },
  dropdownRowTxtStyle: { color: color.white, textAlign: 'left' },
});

export default OrgorVolDropDown;

import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import color from '../../Assets/colors/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const PasswordInput = props => {
  const {mode = 'outlined'} = props;
  return (
    <View style={TextInputStyle.inputContainer}>
      <MaterialIcons name={props.nameicon} size={18} color="#444444" />
      <View style={TextInputStyle.inputView}>
        <TextInput
          ref={props.ref}
          style={[TextInputStyle.Textinputstyle, {...props.style}]}
          placeholder={props.placeholder}
          mode={mode}
          color={color.default}
          disabled={props.disabled}
          value={props.value}
          placeholderTextColor={props.placeholderTextColor}
          // editable={false}
          textAlign={props.textAlign}
          keyboardType={props.keyboardType}
          scrollEnabled={false}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          onChangeText={props.onChangeText}
          onChange={props.onChange}
          secureTextEntry={props.secureTextEntry}
          maxLength={props.maxLength}
          //   theme={{colors: {primary: COLORS.secondary, text: COLORS.secondary}}}
          outlineColor={props.outlineColor}
          underlineColor={props.underlineColor}
          editable={props?.editable}
        />
        <TouchableOpacity onPress={props.onPress}>
          <Icon name={props.name} size={18} color="#444444" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TextInputStyle = StyleSheet.create({
  Textinputstyle: {
    width: '90%',
    paddingVertical: 13,
    fontSize: 15,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    elevation: 1,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default PasswordInput;

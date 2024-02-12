import React from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import color from '../../Assets/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const EmailBorder = props => {
  const {mode = 'outlined'} = props;
  return (
    <View style={TextInputStyle.inputView}>
      <Icon name={props.icon} size={18} color="#444444" />
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
        // onTouchMove
      />
    </View>
  );
};

const TextInputStyle = StyleSheet.create({
  Textinputstyle: {
    // backgroundColor: '#fff',
    // borderWidth:1,
    // borderColor:color.red,
    width: '90%',
    // borderRadius:10,
    // width: width * 0.92,
    // marginVertical: height * 0.06,
    paddingVertical: 13,
    // backgroundColor:'red'
    fontSize: 15,
    paddingHorizontal: 5,
  },
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 6,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    elevation: 1,
    // borderWidth: 1,
    borderColor: color.btnColor,
  },
});

export default EmailBorder;

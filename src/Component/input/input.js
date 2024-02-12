import React from 'react';
import {Dimensions, StyleSheet, TextInput, View,Image} from 'react-native';
import color from '../../Assets/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import normalize from 'react-native-normalize';
const C_TextInput = props => {
  const {mode = 'outlined',imageSource} = props;

  return (
    <View style={TextInputStyle.inputView}>
      <Icon name={props.icon} size={18} color="#444444" />
      {imageSource && (
        <Image source={imageSource} style={TextInputStyle.imgStyle} />
      )}
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
  imgStyle: {
    height: normalize(20),
    width: normalize(16),
  },
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 6,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 7,
    paddingHorizontal: 10,
    elevation: 1,
  },
});

export default C_TextInput;

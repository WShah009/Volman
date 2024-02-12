import React from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import color from '../../Assets/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const TagsInput = props => {
  const {mode = 'outlined'} = props;
  return (
    <View style={[TextInputStyle.inputView, {...props.styleinputview}]}>
      <Icon name="search" size={24} color="#444444" />

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
    width: '90%',
    paddingVertical: 13,
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
  },
});

export default TagsInput;

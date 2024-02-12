import * as React from 'react';
import {TextInput} from 'react-native-paper';

const Rigthiconinput = props => {
  return (
    <TextInput
      mode="outlined"
      label={props.label}
      placeholder={props.placeholder}
      placeholderTextColor="white"
      secureTextEntry={props.secureTextEntry}
      multiline={props.multiline}
      keyboardType={props.keyboardType}
      value={props.value}
      right={<TextInput.Icon icon={props.right} />}
      onChangeText={value => props.onChangeText(value)}
      style={props.style}
      theme={props.theme}
      outlineStyle={props.outlineStyle}
    />
  );
};

export default Rigthiconinput;

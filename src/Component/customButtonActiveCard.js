import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import color from '../Assets/colors/colors';
const CustomButtonActive = ({title, onPress, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Image source={require('../Assets/user-fill.png')} />
      <Text
        style={{
          color: color.darkBlue,
          marginLeft: 10,
          fontWeight: 'bold',
          fontSize: 15,
        }}>
        Contact Organizer
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: '55%',
    height: '14%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: color.darkBlue,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent', // Set the background color to transparent
  },
});

export default CustomButtonActive;

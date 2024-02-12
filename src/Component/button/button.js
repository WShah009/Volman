import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
  } from "react-native";
  import React from 'react';
  import { useNavigation } from '@react-navigation/native';
  import color from "../../Assets/colors/colors";
  import normalize from 'react-native-normalize';
  
  
  const CustomButton = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.btnContainer}>
        <Button style={styles.loginBtn} title="Continue" />
      </View>
    )
  }
  
  export default CustomButton
  
  const styles = StyleSheet.create({
    btnContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: '100%',

    },
    loginBtn:{ 
      marginTop:35,
      width:"100%",
      borderRadius:6,
      textAlign: 'center',
      height: normalize(55),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.btnColor,

      alignSelf: 'center'
    },
    btnText:{
      color: 'white', 
      fontSize: 20,
      lineHeight: 40,
      fontWeight: "bold",
    },
   
    
  })
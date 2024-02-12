
import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     

     <ImageBackground source={require('./../Assets/Mask.png')} resizeMode="cover" style={styles.image}>
     < ScrollView>
     
     
     <Text style={styles.iconsinputsetting} >zxvcbxvcbnvcxznbv</Text>
     <View style={[styles.inputView,styles.inputsetting]}>
   
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
       />
       
    </View>
  
    <View style={[styles.inputView,styles.inputsetting]}>
   
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
       
      />
    </View>

   <TouchableOpacity
     onPress={() => {
      navigation.navigate('Forget');
    }}
    >
      <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.loginBtn}
     onPress={() => {
      navigation.navigate('Home');
    }} >
      <Text style={styles.loginText}>LOGIN</Text>
     
    </TouchableOpacity>

    <Text style={[styles.icons,styles.orlogin]}>----or login with----</Text>    
    <View  style={styles.iconsetting} >
    <Image source={{uri: 'data:image/png;base64,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'}}
       style={{width: 40, height: 40}} /> 
       <Text style={styles.register} >  </Text>
    <Image source={{uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'}}
       style={{width: 37, height: 40}} /> 
       <Text style={styles.register} >  </Text>   
    <Image source={{uri: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png'}}
       style={{width: 40, height: 40}} /> 
    </View>
    <Text style={styles.icons}>Don't have  an account? 
    <TouchableOpacity
     onPress={() => {
      navigation.navigate('Step1');
    }}
    >
      <Text style={styles.register} > Register now</Text>
    </TouchableOpacity></Text> 
    </ScrollView>
    </ImageBackground>
  </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    height: 95,
    marginBottom: 20,
    marginLeft: 20,
 
   fontSize: 20,

   
  },
  marginsecondinput:{
      
  },
  loginText:{
    color: 'white'
  }
 ,
 orlogin :{
  marginLeft: 90,
 },



 forgot_button: {
    height: 35,
    marginBottom: 30,
    marginLeft:70,
    marginLeft:200,
    fontWeight: "bold",
    color:"#ff002e",

  },
  TextInput:{
    // backgroundColor:"red",
    width:"100%"
  },
  iconsetting:{
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: "center",
    },




container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  loginBtn:
  {
    width:"40%",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#272075",
    marginLeft:100,
  },
  icons:{
 
    marginLeft:40,
    marginTop:30,
    height:50,
    alignItems:"center",
    fontWeight: "bold",
    fontSize: 18,
  },
  register:{
    marginTop:10,
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },
  inputsetting:{
    flex:0.15,
    flexDirection: 'row',
 },
 iconsinputsetting:{
  marginTop:12,
  marginLeft:10,
  marginRight:8,
 },

})
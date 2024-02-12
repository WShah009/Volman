import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
       <TouchableOpacity style={styles.loginBtn}>
          <Text>login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginBtn:
    {
      width:"80%",
      borderRadius:10,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      backgroundColor:"white",
      marginLeft:30,
    },

})
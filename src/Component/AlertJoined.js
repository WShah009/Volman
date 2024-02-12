import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native'

const AlertJoined = () => {
   const showAlert = () =>{
      Alert.alert(
         'You need to...'
      )
   }
   return (
   <>
   <Text>
    {showAlert}</Text>
   </>
   )
}
export default AlertJoined

const styles = StyleSheet.create ({
   button: {
      backgroundColor: '#4ba37b',
      width: 1,
      borderRadius: 50,
      alignItems: 'center',

   }
})
